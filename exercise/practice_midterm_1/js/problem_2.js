const startButton = document.querySelector('#problem-2 #start-button');
const finishButton = document.querySelector('#problem-2 #finish-button');
const timeTakenOutput = document.querySelector('#problem-2 #time-taken')

timeTakenOutput.textContent = `(TODO)`;

// Write your code for problem 2 below
let startTime, timer;

startButton.addEventListener('click', () => {
    startTime = (new Date()).getTime();
    timer = setInterval(() => {
        timeTakenOutput.textContent = (new Date()).getTime() - startTime;
    });
});

finishButton.addEventListener('click', () => {
    clearInterval(timer);
    timeTakenOutput.textContent = (new Date()).getTime() - startTime;
});
