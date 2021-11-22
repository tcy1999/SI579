import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

const SAVED_TASKS_KEY = 'saved_tasks';
let todoItems = ['Buy milk'];
const savedTasks = localStorage.getItem(SAVED_TASKS_KEY);
if(savedTasks){
    todoItems = JSON.parse(savedTasks).map(t => t.text);
}

function onTasksChanged(tasks) {
    const stringifiedTasks = JSON.stringify(tasks);
    localStorage.setItem(SAVED_TASKS_KEY, stringifiedTasks);
}

ReactDOM.render(
    <React.StrictMode>
        <TodoList initialTasks={todoItems} onTasksChanged={onTasksChanged} />
    </React.StrictMode>,
    document.getElementById('root')
);