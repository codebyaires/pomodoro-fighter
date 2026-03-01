<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pomodoro Fighter</title>
    <style>

        /* RESET BÁSICO */
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { 
            background-color: #121212; 
            color: white; 
            /* Fonte mais limpa e moderna do sistema */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            text-align: center; 
            padding-top: 50px; 
        }

        /* TÍTULO PRINCIPAL */
        h1 { 
            font-size: 50px; 
            margin-bottom: 20px;
            letter-spacing: 2px; /* Espaçamento leve para elegância */
        }

        /* O RELÓGIO GIGANTE */
        #timerDisplay {
            font-size: 170px;
            font-weight: bold;
            border: 5px solid white; 
            background-color: #1a1a1a; /* Fundo sutilmente mais claro que o body */
            border-radius: 100px; 
            padding: 20px 40px; 
            display: inline-block; 
            margin-bottom: 20px; 
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6); /* Sombra para destacar do fundo */
        }

        /* FRASE DE INSTRUÇÃO */
        #session {
            color: #ffca28; /* Amarelo mais suave e agradável */
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 15px;
        }

        /* CAIXA DE TEXTO */
        #timeInput {
            padding: 10px;
            font-size: 18px;
            border-radius: 5px;
            border: 2px solid transparent; /* Espaço reservado para a borda verde */
            width: 120px;
            text-align: center;
            margin-right: 10px;
            outline: none;
            transition: 0.2s;
        }

        /* Efeito de foco quando clica para digitar */
        #timeInput:focus {
            border: 2px solid #4CAF50;
        }

        /* BOTÃO START */
        #btnStart {
            padding: 10px 25px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
            border: none;
            background-color: #4CAF50; 
            color: white;
            cursor: pointer;
            transition: 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

         #btnStart:hover {
            background-color: #2E7D32; /* Um verde bem mais escuro e perceptível */
            transform: translateY(-2px); 
        }

        /* BOTÃO STOP ALINHADO */
        #btnStop {
            padding: 10px 25px; /* Igual ao Start para não ficar torto */
            font-size: 18px;    /* Igual ao Start */
            font-weight: bold;
            border-radius: 5px; /* Igual ao Start */
            border: none;
            background-color: #ff1a1a; 
            color: white;
            cursor: pointer;
            transition: 0.2s;
            
            display: inline-block; /* Fica na mesma linha */
            margin-left: 10px; /* Empurra um pouquinho para a direita para não grudar no Start */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            vertical-align: top; /* Garante o alinhamento perfeito na linha */
        }

        #btnStop:hover {
            background-color: #990000; 
            transform: translateY(-2px);
        }
    </style>
</head>
<body>

    <h1>Pomodoro Fighter</h1>

    <div id="timerDisplay">00:00</div>
    
    <p id="session">Digite quantos minutos será sua sessão de estudos:</p>
    
    <div style="margin-top: 15px;">
        <input type="number" id="timeInput" min="0" max="300" placeholder="Ex: 25">
        <button id="btnStart">Start</button>
        <button id="btnStop">Stop</button>
    </div>

    <audio id="meuAudio" src="gatilho.mp3"></audio>
    <audio id="somAlarme" src="alarme.mp3"></audio>
    <script src="script.js"></script>

</body>
</html>