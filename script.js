
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
   
    const guess = parseInt(document.getElementById('guessInput').value);

   
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    
    attempts++;

    
    const difference = Math.abs(randomNumber - guess);

    
    if (difference === 0) {
        document.getElementById('feedback').innerHTML = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        document.getElementById('playAgain').style.display = 'block'; 
        document.getElementById('attempts').innerHTML = '';
    } else if (guess > randomNumber && difference <= 3) {
        document.getElementById('feedback').innerHTML = 'Almost there! Try lower.';
    } else if (guess < randomNumber && difference <= 3) {
        document.getElementById('feedback').innerHTML = 'Almost there! Try higher.';
    } else if (guess < randomNumber && difference > 10) {
        document.getElementById('feedback').innerHTML = 'Too low! Try higher.';
    } else if (guess < randomNumber) {
        document.getElementById('feedback').innerHTML = 'Low! Try higher.';
    } else if (guess > randomNumber && difference > 10) {
        document.getElementById('feedback').innerHTML = 'Too high! Try lower.';
    } else {
        document.getElementById('feedback').innerHTML = 'High! Try lower.';
    }

 
    document.getElementById('attempts').innerHTML = `Attempts: ${attempts}`;

    document.getElementById('guessInput').value = '';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById('feedback').innerHTML = '';
    document.getElementById('attempts').innerHTML = '';
    document.getElementById('playAgain').style.display = 'none'; 
}
