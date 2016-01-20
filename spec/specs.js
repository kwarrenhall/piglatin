

describe('pigLatin', function() {
  it("add ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("takes a single consonant at the beginning of a word and moves it to the end", function() {
    expect (pigLatin("cat")).to.equal("atcay");
  });

  it("takes both the 'u' along with the  'q' for words that start with 'qu'", function() {
    expect (pigLatin("quail")).to.equal("ailquay");
  });

  it("move all of the first consecutive consonants to the end and add 'ay' for words that start with one or more consonants", function() {
    expect(pigLatin("cup")).to.equal("upcay");
  });
});
