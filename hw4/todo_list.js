function addTask(description, dueTime=false){
    const taskList = document.getElementById('task_list');
    const taskElement = document.createElement('li');
    
    taskElement.innerHTML = description;
    if(dueTime) {
        let date = new Date(dueTime);
        taskElement.innerHTML += '<span class="due">due ' + date.toLocaleDateString() + ' ' 
        + date.toLocaleTimeString() + '</span>';
    }

    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('class', 'btn btn-sm btn-outline-danger done');
    doneBtn.setAttribute('type', 'button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => {
        taskElement.remove();
    });
    taskElement.append(doneBtn);
    taskList.append(taskElement);
}

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

const taskBtn = document.getElementById('add_task');
const descriptionInputElement = document.getElementById('task_description_input');

taskBtn.addEventListener('click', () => {
    const description = descriptionInputElement.value;
    const dueTime = dateAndTimeToTimestamp(document.getElementById('duedate_input'),  
    
    document.getElementById('duetime_input'));
    addTask(description, dueTime);
    descriptionInputElement.value = '';
});

descriptionInputElement.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        taskBtn.click();
    }
});
