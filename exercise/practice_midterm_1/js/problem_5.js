const timeSelectElement = document.querySelector('#problem-5 #time-select');
const secondsOldElement = document.querySelector('#problem-5 #seconds-old')

function getInputTimestamp() {
    const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
    return timeSelectElement.valueAsNumber + timezoneOffset;
}

function updateDisplay() {
    const inputTime = getInputTimestamp();
    const currentTime = (new Date()).getTime();
    secondsOldElement.textContent = Math.round((currentTime - inputTime) / 1000);
}

updateDisplay();

setInterval(updateDisplay, 1000);

timeSelectElement.addEventListener('change', () => {
    updateDisplay();
});