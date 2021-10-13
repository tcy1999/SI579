const flashingBlock = document.querySelector('#problem-4 #color-target');

flashingBlock.classList.add('blue');

setInterval(() => {
    flashingBlock.classList.toggle('yellow');
}, 2000);