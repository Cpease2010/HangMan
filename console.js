// Hangman JavaScript

// pick a random word
// put word into array with placeholders
var arrOfWords = ['secret','technical','beautiful','tennis','complicated'];
var selectedWord = [];
var arrLength = arrOfWords.length;
function selectWord(arr) {
  theWord = arr[Math.floor(Math.random() * arrLength)];
  for (var i = 0, wordLength = theWord.length; i < wordLength; i++) {
    selectedWord[i] = " ? "
  };
  console.log(theWord);
  console.log(selectedWord);
}
// player guess
// if guess is not a 1 letter string
//   player guess again
//   else if guess is in array
//     replace blank with guess
//   else push guess into not it array
// if random word has blanks
//   guess again
//   else congratulations
