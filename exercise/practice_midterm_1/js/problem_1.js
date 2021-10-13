// PROBLEM 1 CODE
const color_target = document.querySelector('#problem-1 #color-target');

const colorButtons = {
    clear:  document.getElementById('color-clear'),
    red:    document.getElementById('color-red'),
    green:  document.getElementById('color-green'),
    blue:   document.getElementById('color-blue'),
    yellow: document.getElementById('color-yellow')
};

let oldColor;
for(const color in colorButtons) { // color is 'clear' -> 'red' -> ...
    const colorButton = colorButtons[color];
    colorButton.addEventListener('click', () => {
        color_target.classList.remove(oldColor);
        color_target.classList.add(color);
        oldColor = color;
    });
}