// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length != 26) return false;
    for (let i = 0; i < input.length; i++) {
      if (alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i]))
        return false;
    }
    if (encode) {
      return encodeMessage(input, alphabet);
    } else {
      return decodeMessage(input, alphabet);
    }
  }

  function encodeMessage(input, alphabet) {
    let result = [];
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let codeIndex = theAlphabet.indexOf(input[i]);
      let codeLetter = alphabet[codeIndex];
      if (codeIndex < 0) {
        result.push(input[i]);
      }
      result.push(codeLetter);
    }
    return result.join("");
  }

  function decodeMessage(input, alphabet) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
      let codeIndex = alphabet.indexOf(input[i]);
      let codeLetter = theAlphabet[codeIndex];
      if (codeIndex < 0) {
        result.push(input[i]);
      }
      result.push(codeLetter);
    }
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
