const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');
const somGatilho = document.getElementById('meuAudio');

let temporizador; 

// EVENTO DE CLIQUE
btnStart.addEventListener('click', function(){

    // Toca o som do gatilho
    somGatilho.currentTime = 0; 
    somGatilho.play();

    // Limpa qualquer sessão antiga antes de começar.
    clearInterval(temporizador); 

    let minutes = Number(inputTime.value);
    let totalTime = minutes * 60;

    // Ignição do Motor (Loop Contínuo)
    temporizador = setInterval(function () {
        
        totalTime = totalTime - 1;

        let minutosAtuais = Math.floor(totalTime / 60);
        let segundosAtuais = totalTime % 60;

        // Formatação visual (Operador Ternário para deixar o código limpo)
        let textoMinutos = minutosAtuais < 10 ? "0" + minutosAtuais : minutosAtuais;
        let textoSegundos = segundosAtuais < 10 ? "0" + segundosAtuais : segundosAtuais;

        // Injeta o tempo na tela
        display.innerText = textoMinutos + ":" + textoSegundos;
        
        // Para a máquina quando chegar em zero
        if (totalTime <= 0) {
            clearInterval(temporizador);
            console.log("O tempo acabou!");
         }     
    }, 1000);

});