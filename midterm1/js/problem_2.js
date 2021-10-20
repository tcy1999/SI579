// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');

// Write your code here
function showOutput() {{
    const num = parseInt(thingInput.value);
    thingCountOutput.textContent = "You added " + num + ' thing' + addS(num); 
}}

showOutput();
thingInput.addEventListener('change', showOutput);