// Hangman JavaScript
function hangman() {
// pick a random word
// put word into array with placeholders
var arrOfWords = ['secret','technical','beautiful','tennis','complicated'];
var wordArray = [];
var arrLength = arrOfWords.length;
function selectWord(arr) {
  theWord = arr[Math.floor(Math.random() * arrLength)];
  for (var i = 0, wordLength = theWord.length; i < wordLength; i++) {
    wordArray[i] = " ? "
  };
  console.log(theWord);
  console.log(wordArray);
}
selectWord(arrOfWords)
// player guess
var guess = prompt("Please pick a letter");
var arrOfMisses = [];
var lettersGuessed = [];
lettersGuessed += guess//   push guess into array
if (guess.length !== 1) {// if guess is not a 1 letter string
  alert("You can only pick 'ONE LETTER'")//   player alerted
} else {
  for (var i = 0; i < theWord.length; i++) {
    if (guess === theWord[i]) {//   else if guess is in array
      wordArray[i] = guess//     replace blank with guess
    }
  }
}
alert(wordArray);
alert(lettersGuessed);
// if random word has blanks
//   guess again
//   else congratulations
}
