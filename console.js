function hangman() {
  // SetUp
  var arrOfWords = ['secret', 'technical', 'beautiful', 'tennis', 'complicated'];
  var wordArray = [];
  var arrLength = arrOfWords.length;
  var lettersGuessed = [];
  // pick a word & put into array with placeholders
  function selectWord(arr) {
    theWord = arr[Math.floor(Math.random() * arrLength)];
    var wordLength = theWord.length
    for (var i = 0; i < wordLength; i++) {
      wordArray[i] = " ? "
    };
    console.log(theWord);
    console.log(wordArray);
  }
  // player guess 'Game On'
  selectWord(arrOfWords)
  var lettersLeft = theWord.length;
  while (lettersLeft !== 0) {
    var guess = prompt("Please pick a letter");
    lettersGuessed.push(guess) //   push guess into array
    if (guess.length !== 1) { // if guess is not a 1 letter string
      alert("You can only pick 'ONE LETTER'") //   player alerted
    } else {
      for (var i = 0; i < theWord.length; i++) {
        if (guess === theWord[i]) { //   else if guess is in array
          wordArray[i] = guess; //     replace blank with guess
          lettersLeft -= 1;
        }
      }
    }
    alert(wordArray);
    alert(lettersGuessed);
  }
  console.log(wordArray);
  console.log(theWord);
  alert("Who's the master?")
  alert('ShoNuff!')
}
hangman();
