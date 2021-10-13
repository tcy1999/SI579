const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
(function(){
    let clickNum = 0;
    clickCountButton.addEventListener('click', () => {
        clickNum++;
        clickCountButton.textContent = 'You clicked the button ' + clickNum 
        + ' time' + addS(clickNum);
    });
})();