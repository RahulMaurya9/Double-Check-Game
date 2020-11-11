'use strict';

function secretNumbers() {
    let sec = Math.trunc(Math.random() * 20) + 1;
    return sec;
}
let score = 20;
let highscore = 0;
let secretNumber = secretNumbers();

document.querySelector('.number').textContent = secretNumber;

function printCurrenValue() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = '❌ No Number';
    } //win here
    else if (secretNumber === guess) {
        document.querySelector('.message').textContent = 'Number Match 😍';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // if(highscore< score){
        //     highscore = score
        //     console.log(highscore)
        //     document.querySelector('.label-highscore').textContent = '🥇 Highscore: ' + highscore
        // }
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High 🙄';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low 🤐';
        console.log(document.querySelector('.score').textContent);
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Not Match 😥';
    }
}

document.querySelector('.check').addEventListener('click', printCurrenValue);
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    secretNumber = secretNumbers();
    document.querySelector('.number').textContent = secretNumber;

});
