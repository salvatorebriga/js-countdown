"use strict"

let timeLeft = 10;
const stopCountdown = document.getElementById('stopCountdown');

function countdown(){
    if(timeLeft === 0){
        document.getElementById('countdown').innerHTML = 'BUON ANNO!!';
        console.log('BUON ANNO!!');
    }else{
        document.getElementById('countdown').innerHTML = timeLeft;
        console.log(timeLeft);
        /*la funzione si auto richiama fin tanto che timeLeft non è 0, con un gap di 1000 ms*/
        setTimeout(countdown, 1000);
    }
    timeLeft--;
}

/*primo richiamo alla funzione*/
setTimeout(countdown, 1000);

/*evento con funzione anonima per fermare subito il countdown*/
stopCountdown.addEventListener('click', function() {
    timeLeft = 0;
    console.log(timeLeft);
} )