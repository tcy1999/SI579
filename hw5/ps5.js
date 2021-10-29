/**
 * Returns a list of objects grouped by some property. For example:
 * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
 * 
 * returns:
 * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
 *    'red': [{name: 'Jack', team: 'red'}]
 * }
 * 
 * @param {any[]} objects: An array of objects
 * @param {string|Function} property: A property to group objects by
 * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
 */
 function groupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const outputHeader = document.getElementById('output_description');
const output = document.getElementById('word_output');
const savedWords = document.getElementById('saved_words');
const savedList = [];

async function fetchRhyme(){
    outputHeader.textContent = 'Words that rhyme with ' + wordInput.value + ':';
    output.textContent = '..loading';
    
    const response = await fetch('https://api.datamuse.com/words?rel_rhy=' + wordInput.value);
    const result = await response.json();

    output.textContent = '';
    if (result.length){
        const groupbyResult = groupBy(result, 'numSyllables');
        for(const key in groupbyResult){
            const groupHeader = document.createElement('h3');
            groupHeader.textContent = `${key} syllable${addS(parseInt(key))}:`;
            output.append(groupHeader);
            for (const item of groupbyResult[key]){
                const itemElement = document.createElement('li');
                itemElement.textContent = item.word;
                const saveBtn = document.createElement('button');
                saveBtn.textContent = '(save)';
                saveBtn.setAttribute('type', 'button');
                saveBtn.setAttribute('class', 'btn btn-outline-success');
                saveBtn.addEventListener('click', () => {
                    savedList.push(item.word);
                    savedWords.textContent = savedList.join(', ');
                });
                itemElement.append(saveBtn);
                output.append(itemElement);
            }
    }
    } else {
        output.textContent = '(no results)';
    }
}

const rhymeBtn = document.getElementById('show_rhymes');
rhymeBtn.addEventListener('click', fetchRhyme);
const wordInput = document.getElementById('word_input');
wordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        rhymeBtn.click();
    }
});

async function fetchSynonym(){
    outputHeader.textContent = 'Words with a similar meaning to ' + wordInput.value + ':';
    output.textContent = '..loading';
    
    const response = await fetch('https://api.datamuse.com/words?ml=' + wordInput.value);
    const result = await response.json();
    
    output.textContent = '';
    if (result.length){
        for (const item of result){
            const itemElement = document.createElement('li');
            itemElement.textContent = item.word;
            const saveBtn = document.createElement('button');
            saveBtn.textContent = '(save)';
            saveBtn.setAttribute('type', 'button');
            saveBtn.setAttribute('class', 'btn btn-outline-success');
            saveBtn.addEventListener('click', () => {
                savedList.push(item.word);
                savedWords.textContent = savedList.join(', ');
            });
            itemElement.append(saveBtn);
            output.append(itemElement);
        }
    } else {
        output.textContent = '(no results)';
    }
}

const synonymBtn = document.getElementById('show_synonyms');
synonymBtn.addEventListener('click', fetchSynonym);
