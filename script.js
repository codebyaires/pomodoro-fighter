const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');
const somGatilho = document.getElementById('meuAudio');

let temporizador; 

btnStart.addEventListener('click', function(){

    let valorDigitado = inputTime.value;
    let minutes = Number(valorDigitado);

    // BARREIRAS DE SEGURANÇA
    if (valorDigitado === "" || isNaN(minutes)) {
        alert("Insira um dígito numérico!");
        return; 
    }
    if (minutes <= 0) {
        alert("Por favor, digite um tempo maior que 0!");
        return;
    }
    if (minutes > 300) {
        alert("O limite máximo é de 300 minutos!");
        return;
    }

    // AÇÃO IMEDIATA
    somGatilho.currentTime = 0; 
    somGatilho.play();
    clearInterval(temporizador); 

    let totalTime = minutes * 60;

    // REAÇÃO VISUAL INSTANTÂNEA
    // (Isso evita que o relógio demore 1s para atualizar após o clique)
    const atualizarTela = (tempo) => {
        let m = Math.floor(tempo / 60);
        let s = tempo % 60;
        display.innerText = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    };
    
    atualizarTela(totalTime); // Atualiza agora!

    // MOTOR
    temporizador = setInterval(function () {
        totalTime--; // Abreviação de totalTime = totalTime - 1

        atualizarTela(totalTime);
        
        if (totalTime <= 0) {
            clearInterval(temporizador);
            console.log("O tempo acabou!");
         }     
    }, 1000);
});