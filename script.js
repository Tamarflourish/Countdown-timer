const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYear = '1 Jan 2023';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = seconds;
     
}

// initial cell

countdown();

setInterval(countdown, 1000);