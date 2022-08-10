// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const polybius = [
      11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34,
      44, 54, 15, 25, 35, 45, 55,
    ];
    const lowerCaseInput = input.toLowerCase();
    let result = "";

    let spaceless = input.split(" ").join("");
    if (!encode && spaceless.length % 2 !== 0) return false;

    if (encode === true) {
      for (let i = 0; i < lowerCaseInput.length; i++) {
        if (lowerCaseInput[i] === " ") {
          result += " ";
        } else if (lowerCaseInput[i] === "i" || lowerCaseInput[i] === "j") {
          result += 42;
        } else {
          for (let j = 0; j < letters.length; j++) {
            if (letters[j] === lowerCaseInput[i]) {
              result += polybius[j];
            }
          }
        }
      }
    } else {
      for (let i = 0; i < lowerCaseInput.length; i += 2) {
        if (lowerCaseInput[i] === " ") {
          result += " ";
          i--;
        } else if (lowerCaseInput[i] + lowerCaseInput[i + 1] == "42") {
          result += "(i/j)";
        } else {
          for (let j = 0; j < polybius.length; j++) {
            if (lowerCaseInput[i] + lowerCaseInput[i + 1] == polybius[j]) {
              result += letters[j];
            }
          }
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
