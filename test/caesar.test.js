// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift isn't present, is equal to 0, less than -25, or greater than 25", () => {
    const actual = caesar("word", 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = caesar("AbCD", 1);
    const expected = "bcde";
    expect(actual).to.equal(expected);
  });
  it("wraps around the end of the alphabet", () => {
    const actual = caesar("xyz", 4);
    const expected = "bcd";
    expect(actual).to.equal(expected);
  });
  it("wraps around the beginning of the alphabet", () => {
    const actual = caesar("abc", -4);
    const expected = "wxy";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces & other symbols in the message", () => {
    const actual = caesar("ab cd ef", 2);
    const expected = "cd ef gh";
    expect(actual).to.equal(expected);
  });
});
