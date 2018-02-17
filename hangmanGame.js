var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
  ];

function pickWord () {
    var word = words[Math.floor(Math.random() * words.length)];
    return word; 
}

function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress(answerArray) {
    return alert(answerArray.join(" "));
}

function getGuess() {
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    return guess;
}

function updateGameState (guess, word, answerArray) {
    var correctGuesses = [];
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        } 
    }
    return correctGuesses;
}

function showAnswerAndCongratulatePlayer (answerArray) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) { 
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses; 
    }
}

showAnswerAndCongratulatePlayer(answerArray);