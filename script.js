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

   // ... dentro do seu btnStart.addEventListener ...

    // 3. MOTOR E AÇÃO IMEDIATA
    somGatilho.currentTime = 0; 
    somGatilho.play();
    clearInterval(temporizador); 
    
    // O SEGREDO: Definimos o momento exato em que o tempo deve acabar
    let targetTime = Date.now() + (totalTime * 1000); 

    temporizador = setInterval(function () {
        // Calcula quanto tempo falta comparando agora com o alvo
        let agora = Date.now();
        let diferenca = targetTime - agora;
        totalTime = Math.round(diferenca / 1000); // Converte milissegundos para segundos
        
        // Se o tempo chegou a 0 ou menos, atualizamos a tela para 0
        if (totalTime < 0) totalTime = 0;
        
        atualizarTela(totalTime);
        
        // 1. O TEMPO ACABOU?
        if (totalTime <= 0) {
            
            // 2. ERA TEMPO DE FOCO?
            if (modoFoco === true) {
                somAlarme.currentTime = 0; 
                somAlarme.play();
                modoFoco = false; 
                textoSessao.innerText = "Tempo de Descanso ☕";
                textoSessao.style.color = "#00e5ff"; 

                // Calcula os 20%
                let novoTempoDescanso = Math.floor(tempoFocoOriginal * 0.2);
                
                // ATUALIZA O ALVO: O novo tempo de descanso começa AGORA
                targetTime = Date.now() + (novoTempoDescanso * 1000);
                totalTime = novoTempoDescanso;
            } 
            
            // 3. SE NÃO ERA FOCO, É PORQUE O DESCANSO ACABOU
            else {
                clearInterval(temporizador);
                somAlarme.currentTime = 0; 
                somAlarme.play();
                // ... (seu código de reset continua o mesmo aqui) ...
                
                // Reseta tudo para uma nova luta
                btnStart.innerText = "Start";
                btnStart.style.backgroundColor = "#4CAF50";
                estaRodando = false;
                totalTime = 0; 
                modoFoco = true;
                document.body.style.backgroundColor = "#121212";
                textoSessao.innerText = "Digite quantos minutos será sua sessão de estudos:";
                textoSessao.style.color = "#ffca28"; 
                inputTime.style.display = "inline-block"; 
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