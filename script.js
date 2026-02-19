const display = document.getElementById('timerDisplay');
const inputTime = document.getElementById('timeInput');
const btnStart = document.getElementById('btnStart');

console.log(display, inputTime, btnStart);

btnStart.addEventListener('Click', function(){
    let minutes = Number(inputTime.value);
    console.log('O úsuario deseja estudar: ', minutes, ' minutos');
});