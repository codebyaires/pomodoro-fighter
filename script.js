const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');
const somGatilho = document.getElementById('meuAudio');

let temporizador; 
let estaRodando = false;
let totalTime = 0;

const atualizarTela = (tempo) => {
    let m = Math.floor(tempo / 60);
    let s = tempo % 60;
    display.innerText = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};

inputTime.addEventListener('input', function() {
    if (estaRodando === true) {
        return; 
    }

    let valorDigitado = inputTime.value;
    let minutes = Number(valorDigitado);
    
    if (valorDigitado === "" || isNaN(minutes) || minutes <= 0 || minutes > 300) {
        display.innerText = "00:00";
        return;
    }

    let totalSegundos = minutes * 60;
    atualizarTela(totalSegundos);
});

btnStart.addEventListener('click', function(){

    // 1. É UM START NOVO? (Se totalTime for 0, precisamos ler o input e validar)
    if (totalTime === 0) {
        let valorDigitado = inputTime.value;
        let minutes = Number(valorDigitado);

        // BARREIRAS DE SEGURANÇA
        if (valorDigitado === "" || isNaN(minutes) || minutes <= 0 || minutes > 300) {
            alert("Por favor, insira um tempo válido entre 1 e 300 minutos!");
            return; // Para tudo e nem muda o botão
        }
        totalTime = minutes * 60; // Define o tempo global
    }

    // 2. O INTERRUPTOR PAUSE/PLAY (Agora sim, depois de validar)
    if (estaRodando === false) {
        btnStart.innerText = "Pause";
        btnStart.style.backgroundColor = "#ff9800"; // Laranja
        estaRodando = true;
    } else {
        btnStart.innerText = "Resume";
        btnStart.style.backgroundColor = "#4CAF50"; // Verde
        estaRodando = false;
        clearInterval(temporizador);
        return; // Pausa o motor e para o código por aqui
    }

    // 3. MOTOR E AÇÃO IMEDIATA
    somGatilho.currentTime = 0; 
    somGatilho.play();
    clearInterval(temporizador); // Limpa resquícios por segurança
    
    atualizarTela(totalTime);

    temporizador = setInterval(function () {
        totalTime--; 
        atualizarTela(totalTime);
        
        if (totalTime <= 0) {
            clearInterval(temporizador);
            console.log("O tempo acabou!");

            // Reseta o botão e o estado para a próxima sessão
            btnStart.innerText = "Start";
            btnStart.style.backgroundColor = "#4CAF50";
            estaRodando = false;
            totalTime = 0; // Zera a memória para permitir um novo Start
         }     
    }, 1000);
});