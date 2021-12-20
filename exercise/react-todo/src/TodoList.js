import { useState, useRef } from 'react';
import TodoItem from "./TodoItem";
function TodoList(){
    const [todolist, setTodolist] = useState(['hello']);
    const inputEl = useRef(null);
    return <><div>
    <ul>
        {todolist.map((item) => <TodoItem item={item}/>)}
    </ul>
    <input type='text' ref={inputEl}></input>
    <button type='button' onClick={() => {
        todolist.push(inputEl.current.value);
        setTodolist(todolist);
    }}>Add</button>
    </div></>;
}

export default TodoList;