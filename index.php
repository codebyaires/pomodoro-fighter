<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pomodoro Fighter</title>
    <style>
        body { background-color: #121212; color: white; font-family: sans-serif; text-align: center; padding-top: 50px; }
        h1 { font-size: 50px; }
    </style>
</head>
<body>

    <h1>Pomodoro Fighter</h1>

   <h1 id="timerDisplay">00:00</h1>
   <p id="session">Digite quantos minutos será sua sessão de estudos: </p>
   <input type="number" id="timeInput">
   <button id="btnStart">Start</button>

   <audio id="meuAudio" src="gatilho.mp3"></audio>

    <script src="script.js"></script>

</body>
</html>