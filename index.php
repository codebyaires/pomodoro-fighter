<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pomodoro Fighter</title>
    <style>
        body { background-color: #121212; color: white; font-family: sans-serif; text-align: center; padding-top: 10px; }
        h1 { font-size: 50px; }
        #timerDisplay {
            font-size: 120px;
            border: 5px solid white; 
            border-radius: 100px; /* Deixa a borda redonda (quanto maior o número, mais redonda) */
            padding: 20px 40px; /* Espaço interno (20px em cima/baixo, 40px nas laterais) para a borda não esmagar os números */
            display: inline-block; /* Impede que a borda estique até o final da tela, forçando ela a abraçar apenas o texto */
            }
        #session 
        {
             color: yellow;
             font-weight: bold;
             font-size: 20px;
    }
    </style>
</head>
<body>

    <h1>Pomodoro Fighter</h1>

   <h1 id="timerDisplay">00:00</h1>
   <P id="session">Digite quantos minutos será sua sessão de estudos: </P>
   <input type="number" id="timeInput">
   <button id="btnStart">Start</button>

    <script src="script.js"></script>

</body>
</html>