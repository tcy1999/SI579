const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
function appendListElement(word){
    const newElement = document.createElement('li');
    newElement.setAttribute('class', 'list-group-item');
    newElement.textContent = word;
    rhymesOutput.append(newElement);
}

showRhymesButton.addEventListener('click', () => {
    rhymesOutput.innerHTML = "";
    getRhymes(wordInput.value, (result) => {
        if(result.length) {
            for (const key in result){
                appendListElement(result[key]['word']);
            }
        }
        else {
            appendListElement('no rhymes');
        }
    });
});

clearButton.addEventListener('click', () => {
    wordInput.value = '';
    rhymesOutput.innerHTML = "";
});