// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    input = input.toLowerCase();
    const result = [];
    if (!encode) {
      shift = -shift;
    }
    for (let i = 0; i < input.length; i++) {
      let char = input.charCodeAt(i);
      if (char < 97 || char > 122) {
        result.push(String.fromCharCode(char));
      } else {
        char += shift;
        if (char >= 97 && char <= 122) {
          result.push(String.fromCharCode(char));
        }
        if (char < 97) {
          result.push(String.fromCharCode(123 - (97 - char)));
        }
        if (char > 122) {
          result.push(String.fromCharCode(96 + (char - 122)));
        }
      }
    }
    return result.join("");
  }

  return { caesar };
})();

module.exports = { caesar: caesarModule.caesar };
