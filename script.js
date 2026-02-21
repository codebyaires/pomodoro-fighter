// 1. Bridges with HTML (Always on top)
const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');

console.log(display, inputTime, btnStart);

const somGatilho = new Audio('gatilho.mp3');
let temporizador; 

// 2. THE CLICK EVENT
btnStart.addEventListener('click', function(){
    
    // Puxa o aúdio do gatilho assim que o úsuario da o 'click'
    somGatilho.play();
    // Limpa qualquer sessão antiga antes de começar.
    clearInterval(temporizador); 

    let minutes = Number(inputTime.value);
    console.log('O usuário deseja estudar: ', minutes, ' minutos');

    let totalTime = minutes * 60;

    // Engine Ignition, Continuous Loop
    temporizador = setInterval(function () {
        
        totalTime = totalTime - 1;

        let minutosAtuais = Math.floor(totalTime / 60);
        let segundosAtuais = totalTime % 60;

        // Cria as variáveis de textolet textoMinutos = minutosAtuais;
        let textoMinutos = minutosAtuais;
        let textoSegundos = segundosAtuais;

        // Pergunta: Minuto é menor que 10? Se sim, gruda um "0" na frente.
        if (minutosAtuais < 10) { 
             textoMinutos = "0" + minutosAtuais;
    }
        // Pergunta: Segundo é menor que 10? Se sim, gruda um "0" na frente.
        if (segundosAtuais < 10) {
             textoSegundos = "0" + segundosAtuais;
    }

        // Injeta na tela a versão com os textos corrigidos
        display.innerText = textoMinutos + ":" + textoSegundos;
        
        // Stop machine IF
        if (totalTime <= 0) {
            clearInterval(temporizador);
            console.log("O tempo acabou!");
         }     
    }, 1000);

});