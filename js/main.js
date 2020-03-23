'use strict'
const inputNumber = document.querySelector('.number-selected');
const submitButton = document.querySelector('.submit-button');
const track = document.querySelector('.track');
const numberAttempsTotal = document.querySelector('.number-attemps');

let maxNumber = 100;
let numberAttemps = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(maxNumber);
console.log(numberRandom)

function showtrack() {

    if (inputNumber.value <= 0 || inputNumber.value > maxNumber || inputNumber.value === '') {

         track.innerHTML = 'Pista: El número debe estar entre 1 y 100';
    }
    else if (inputNumber.value < numberRandom) {
         track.innerHTML = ' Pista: Demasiado bajo';
    }
    else if (inputNumber.value > numberRandom) {
         track.innerHTML = ' Pista: Demasiado alto';
    } else {
         track.innerHTML = 'Pista: Has ganado campeona!!!';
    }
}

function onClickButton() {
    numberAttemps++
    attemps();
    showtrack();
    console.log(`Número escogido: ${inputNumber.value}`);
}

function attemps() {
    return numberAttempsTotal.innerHTML = ` nº de intentos: ${numberAttemps}`;
}

submitButton.addEventListener('click', onClickButton);


