const display = document.getElementById('timerDisplay');
const textoSessao = document.getElementById('session');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const somGatilho = document.getElementById('meuAudio');
const somAlarme = document.getElementById('somAlarme');

let temporizador; 
let estaRodando = false;
let totalTime = 0;
let modoFoco = true; // Começa sempre como 'Foco' (true) e vira 'Descanso' (false)
let tempoFocoOriginal = 0; // Vai guardar o tempo digitado para calcular os 20% depois

const atualizarTela = (tempo) => {
    let h = Math.floor(tempo / 3600);
    let m = Math.floor((tempo % 3600) / 60);
    let s = tempo % 60;

    let formatoH = h < 10 ? "0" + h : h;
    let formatoM = m < 10 ? "0" + m : m;
    let formatoS = s < 10 ? "0" + s : s;

    if (h > 0) {
        display.innerText = formatoH + ":" + formatoM + ":" + formatoS;
    } else {
        display.innerText = formatoM + ":" + formatoS;
    }
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

        tempoFocoOriginal = totalTime;

        textoSessao.innerText = "Tempo de Foco 🔥";
        textoSessao.style.color = "#00e676"; // Verde
        inputTime.style.display = "none";    // Faz a caixa de digitar sumir
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
        
        // 1. O TEMPO ACABOU?
        if (totalTime <= 0) {
            
            // 2. ERA TEMPO DE FOCO?
            if (modoFoco === true) {
                console.log("Foco acabou! Iniciando descanso...");
                
                // Toca o gongo
                somAlarme.currentTime = 0; 
                somAlarme.play();

                // Vira a chave para descanso
                modoFoco = false; 

                // Atualiza a interface para Descanso
                textoSessao.innerText = "Tempo de Descanso ☕";
                textoSessao.style.color = "#81d4fa"; // Um azul claro bacana

                // Calcula os 20% e dá o novo tempo para o relógio
                totalTime = Math.floor(tempoFocoOriginal * 0.2);                
            } 
            // 3. SE NÃO ERA FOCO, É PORQUE O DESCANSO ACABOU
            else {
                console.log("Descanso acabou! Fim da sessão.");
                
                // Para o motor
                clearInterval(temporizador);
                
                somAlarme.currentTime = 0; 
                somAlarme.play();

                // Reseta tudo para uma nova luta
                btnStart.innerText = "Start";
                btnStart.style.backgroundColor = "#4CAF50";
                estaRodando = false;
                totalTime = 0; 
                modoFoco = true; // Volta a ser Foco para a próxima vez
                document.body.style.backgroundColor = "#121212"; // Volta a cor original do fundo

                // Restaura a interface inicial
                textoSessao.innerText = "Digite quantos minutos será sua sessão de estudos:";
                textoSessao.style.color = "#ffca28"; // Amarelo
                inputTime.style.display = "inline-block"; // Traz a caixa de volta
             }
         }     
    }, 1000);
});

btnStop.addEventListener('click', function() {
    clearInterval(temporizador);

    estaRodando = false;
    totalTime = 0;
    modoFoco = true;

    display.innerText = "00:00";
    inputTime.value = "";
    document.body.style.backgroundColor = "#121212";

    // Restaura a interface inicial caso o usuário desista
    textoSessao.innerText = "Digite quantos minutos será sua sessão de estudos:";
    textoSessao.style.color = "#ffca28"; 
    inputTime.style.display = "inline-block"; 

    btnStart.innerText = "Start";
    btnStart.style.backgroundColor = "#4CAF50";
});