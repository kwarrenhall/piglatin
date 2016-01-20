
var pigLatin = function(englishWord) {
  // var vowels = ['a', 'e', 'i', 'o', 'u'];
  // var startsWithVowel;
  // for (var i = 0; i < vowels.length; i++) {
  //   if (englishWord[0] === vowels[i]) {
  //     startsWithVowel = true;
  //     break;
  //   }
  // }
  var translatedWord;
  if(englishWord.match(/^[aeiouAEIOU]/)){
    translatedWord = englishWord;
  }
  else {
    if(englishWord.match(/^[quQu]/)){
      translatedWord = englishWord.slice(2) + "qu";
    }
  else {
      translatedWord = englishWord.slice(1) + englishWord[0];
    }
  }
  return translatedWord + "ay";
}
