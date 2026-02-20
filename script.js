// 1. Bridges with HTML (Always on top)
const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');
let temporizador = 0;

console.log(display, inputTime, btnStart);

// 2. THE CLICK EVENT
btnStart.addEventListener('click', function(){
    clearInterval(temporizador);

    let minutes = Number(inputTime.value);
    console.log('O usuário deseja estudar: ', minutes, ' minutos');

    let totalTime = minutes * 60;

    // Engine Ignition, Continuous Loop
    temporizador = setInterval(function () {
        
        totalTime = totalTime - 1;

        let minutosAtuais = Math.floor(totalTime / 60);
        let segundosAtuais = totalTime % 60;

        display.innerText = minutosAtuais + ":" + segundosAtuais;
        
        // Stop machine IF
        if (totalTime <= 0) {
            clearInterval(temporizador);
            console.log("O tempo acabou!");
         }     
    }, 1000);

});