const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect ?? true;
  }

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  validateArgs(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
  }

  encrypt(plaintext, key) {
    this.validateArgs(plaintext, key);
    let cipherText = "";
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext[i].toUpperCase();

      if (this.alphabet.includes(char)) {
        let plainCharIndex = this.alphabet.indexOf(char);
        let keyCharIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
        let encryptedIndex =
          (plainCharIndex + keyCharIndex) % this.alphabet.length;
        cipherText += this.alphabet[encryptedIndex];
        keyIndex++;
      } else {
        cipherText += char;
      }
    }
    return this.isDirect ? cipherText : cipherText.split("").reverse().join("");
  }
  decrypt(cipherText, key) {
    this.validateArgs(cipherText, key);
    let plainText = "";
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < cipherText.length; i++) {
      let char = cipherText[i].toUpperCase();

      if (this.alphabet.includes(char)) {
        let cipherCharIndex = this.alphabet.indexOf(char);
        let keyCharIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
        let decryptedIndex =
          (cipherCharIndex - keyCharIndex + this.alphabet.length) %
          this.alphabet.length;
        plainText += this.alphabet[decryptedIndex];
        keyIndex++;
      } else {
        plainText += char;
      }
    }
    return this.isDirect ? plainText : plainText.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
