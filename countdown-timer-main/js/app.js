'use strict';


const inputTargetDate = document.querySelector("input[name='endDate']");
const labelDays = document.querySelector(".days");
const labelHours = document.querySelector(".hours");
const labelMinutes = document.querySelector(".minutes");
const labelSeconds = document.querySelector(".seconds");

let targetDate;


const calcDiffHuman = function () {
    const dateNow = new Date(Date.now());
    const miliDiff = Math.abs(targetDate - dateNow);
    const secs = Math.floor((miliDiff / 1000) % 60)
    const mins = Math.floor((miliDiff / (1000 * 60)) % 60);
    const hours = Math.floor((miliDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor((miliDiff / (1000 * 60 * 60 * 24)));

    displayDiff({days: days, hours: hours, minutes: mins, seconds: secs});
    // displayDiffiff({days: days, hours: hours, minutes: mins, seconds: secs});
}
const displayDiff = function (obj) {
    labelDays.textContent = String(obj.days);
    labelHours.textContent = String(obj.hours)
        .padStart(2, '0');
    labelMinutes.textContent = String(obj.minutes)
        .padStart(2, '0');
    labelSeconds.textContent = String(obj.seconds)
        .padStart(2, '0');
}

inputTargetDate.addEventListener('change', ev => {
    targetDate = new Date(Date.parse(`${ev.target.value}T00:00:00`));
    setInterval(calcDiffHuman, 1000);
});