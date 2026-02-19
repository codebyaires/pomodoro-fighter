// 1. Bridges with HTML (Always on top)
const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');

console.log(display, inputTime, btnStart);

// 2. THE CLICK EVENT
btnStart.addEventListener('click', function(){

    let minutes = Number(inputTime.value);
    console.log('O usuário deseja estudar: ', minutes, ' minutos');

    let totalTime = minutes * 60;

    // Engine Ignition, Continuous Loop
    let temporizador = setInterval(function () {
        
        totalTime = totalTime - 1;

        let minutosAtuais = Math.floor(totalTime / 60);
        let segundosAtuais = totalTime % 60;

        console.log(minutosAtuais, segundosAtuais);
        
        // Stop machine IF
        if (totalTime <= 0) {
            clearInterval(temporizador);
            console.log("O tempo acabou!");
         }     
    }, 1000);

});