'use strict'
const inputNumber= document.querySelector('.number-selected');
const submitButton= document.querySelector('.submit-button');
const track= document.querySelector('.track');
const numberAttempsTotal= document.querySelector('.number-attemps');

let max= 100;
let  numberAttemps= 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
   console.log(getRandomNumber(max));

   const numberRandom = getRandomNumber(max);
   
   function showtrack(){
       
       if(inputNumber.value < numberRandom) {
          
          return track.innerHTML= ' Pista: Demasiado bajo';
       }
        else if(inputNumber.value > numberRandom ){
            return track.innerHTML= ' Pista: Demasiado alto';
       }
        else if(inputNumber.value == numberRandom ){
           return track.innerHTML= 'Pista: Has ganado campeona!!!';
       }
       else{
           return track.innerHTML= 'Pista: El número debe estar entre 1 y 100';
       }
          
   }
   

   function onClickButton(){
       showtrack();
       attemps();
       numberAttemps++
       

    console.log(`Número escogido: ${inputNumber.value}`);

}

function attemps(){
  return numberAttempsTotal.innerHTML= ` nº de intentos: ${numberAttemps}`;

}


submitButton.addEventListener('click',onClickButton);