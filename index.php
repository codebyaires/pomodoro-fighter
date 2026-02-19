<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pomodoro Fighter</title>
    <style>
        body { background-color: #121212; color: white; font-family: sans-serif; text-align: center; padding-top: 50px; }
        h1 { font-size: 50px; }
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
    <p>Se você está vendo isso, o PHP funcionou!</p>

   <h1 id="timerDisplay">00:00</h1>
   <P id="session">Digite quantos minutos será sua sessão de estudos: </P>
   <input type="number" id="timeInput">
   <button id="btnStart">Start</button>

    <script src="script.js"></script>

</body>
</html>