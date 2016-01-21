
var pigLatin = function(englishWord) {
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
};

$ (document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    var translated = pigLatin(word)

    $(".translate").text(translated);
    event.preventDefault();
  });
});



// ******working code from the pigLatin video-not used  *************
// var pigLatin = function(englishWord) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var startsWithVowel;
//   for (var i = 0; i < vowels.length; i++) {
//     if (englishWord[0] === vowels[i]) {
//       startsWithVowel = true;
//       break;
//     }
//   }
// **********working code -used****************
// var pigLatin = function(englishWord) {
//
//   var translatedWord;
//
//   if(englishWord.match(/^[aeiouAEIOU]/)){
//     translatedWord = englishWord;
//   }
//
//   else {
//     if(englishWord.match(/^[quQu]/)){
//       translatedWord = englishWord.slice(2) + "qu";
//     }
//   else {
//       translatedWord = englishWord.slice(1) + englishWord[0];
//     }
//   }
//   return translatedWord + "ay";
// }
