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
            font-family: sans-serif; 
            text-align: center; 
            padding-top: 50px; 
        }

        /* TÍTULO PRINCIPAL */
        h1 { 
            font-size: 50px; 
            margin-bottom: 20px;
        }

        /* O RELÓGIO GIGANTE */
        #timerDisplay {
            font-size: 200px;
            font-weight: bold;
            border: 5px solid white; 
            border-radius: 100px; /* Borda redonda */
            padding: 20px 40px; /* Espaço interno para não esmagar os números */
            display: inline-block; /* Abraça apenas o texto */
            margin-bottom: 20px; 
        }

        /* FRASE DE INSTRUÇÃO */
        #session {
            color: yellow;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 15px;
        }

        /* CAIXA DE TEXTO */
        #timeInput {
            padding: 10px;
            font-size: 18px;
            border-radius: 5px;
            border: none;
            width: 120px;
            text-align: center;
            margin-right: 10px;
        }

        /* BOTÃO START */
        #btnStart {
            padding: 10px 25px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
            border: none;
            background-color: #4CAF50; /* Verde estilo Play */
            color: white;
            cursor: pointer;
            transition: 0.2s;
        }

        #btnStart:hover {
            background-color: #45a049; /* Fica mais escuro ao passar o mouse */
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
    </div>

    <audio id="meuAudio" src="gatilho.mp3"></audio>

    <script src="script.js"></script>

</body>
</html>