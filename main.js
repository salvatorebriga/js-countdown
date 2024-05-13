"use strict"

let timeLeft = 10;

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
