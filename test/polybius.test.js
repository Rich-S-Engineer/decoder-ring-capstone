// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("converts 42 to i and j", () => {
    const actual = polybius("42", false);
    const expected = "(i/j)";
    expect(actual).to.equal(expected);
  });
  it("converts i or j to 42", () => {
    const actual = polybius("jif");
    const expected = "424212";
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
    const actual = polybius("aBC");
    const expected = polybius("abc");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces & other symbols in the message", () => {
    const actual = polybius("11 21 31", false);
    const expected = "a b c";
    expect(actual).to.equal(expected);
  });
  it("should return false when decoding if the number of characters is odd", () => {
    const actual = polybius("11213", false);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
