import { createRef, useEffect, useState } from "react";
import TodoItem from "./TodoItem";

let uid = 0;
function TodoList(props) {
    const { initialTasks } = props;

    const [tasks, setTasks] = useState(initialTasks.map((t) => ({
        text: t,
        id: uid++
    })));

    const inputEl = createRef();

    const taskDisplays = tasks.map((task) => {
        return <TodoItem onDelete={() => onDeleteTask(task.id)} key={task.id} text={task.text} />
    });

    // Change the list of tasks to **not** include the item at idx
    function onDeleteTask(id) {
        const newTasks = tasks.filter((t) => t.id !== id);
        setTasks(newTasks);

        // If the parent passed in a callback for when tasks changed, notify them
        if(props.onTasksChanged) {
            props.onTasksChanged(newTasks);
        }
    }

    function onAddTask() {
        const task = {
            text: inputEl.current.value,
            id: uid++
        };

        const newTasks = tasks.concat(task); // add the new task to the end (without mutating tasks)
        inputEl.current.value = ''; // clear the input for the next task
        inputEl.current.focus(); // and give it keyboard focus

        setTasks(newTasks); // update our tasks
        // If the parent passed in a callback for when tasks changed, notify them
        if(props.onTasksChanged) {
            props.onTasksChanged(newTasks);
        }
    }

    function onKeyDown(event) {
        if(event.key === 'Enter') {
            onAddTask(); // add the task if the user presses enter in the input field
        }
    }

    return <>
        <ul>{taskDisplays}</ul>
        <div>
            <input onKeyDown={onKeyDown} type="text" ref={inputEl} />
            <button onClick={onAddTask}>Add Task</button>
        </div>
    </>;
}

export default TodoList;