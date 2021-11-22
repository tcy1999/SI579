import TodoItem from './TodoItem';
import {useState, useRef, memo, useCallback} from 'react';

let uid = 0;
const MemodTodoItem = memo(TodoItem);

function TodoList () {
    const inputEl = useRef(null);
    const [todoItems, setTodoItems] = useState([{id: uid++, text: 'item 1'}]);

    const removeTask = useCallback(function (id) {
        setTodoItems((oldValues) => oldValues.filter((item) => item.id !== id));
    }, []);

    const elements = todoItems.map((item) => <MemodTodoItem onDone={removeTask} key={item.id} id={item.id} description={item.text} /> );

    function addTodoItem() {
        const newTodoList = todoItems.concat({id: uid++, text: inputEl.current.value});
        inputEl.current.value = '';
        setTodoItems(newTodoList);
        inputEl.current.focus();
    }

    function onKeydown(event) {
        if(event.key === 'Enter') {
            addTodoItem();
        }
    }

    return <div> <ul>{elements}</ul>
    <input onKeyDown={onKeydown} ref={inputEl} type="text"></input>
    <button onClick={addTodoItem}>Add</button>
    </div>;
}

/* 
function TodoList () {
    const inputEl = useRef(null);
    const [todoItems, setTodoItems] = useState([{id: uid++, text: 'item 1'}]);
    let uid = 0;

    function removeTask(idx) {
        const newTodo = [...todoItems.slice(0, idx), ...todoItems.slice(idx+1)];
        setTodoItems(newTodo);
    }

    // const elements = [];
    // for(let i = 0; i<todoItems.length; i++) {
    //     const item = todoItems[i];
    //     const elem = <TodoItem onDone={() => removeTask(i)} key={i} description={item} />;
    //     elements.push(elem);
    // }

    const elements = todoItems.map((item, i) => <TodoItem onDone={() => removeTask(i)} key={item.id} description={item.text} /> );

    function addTodoItem() {
        const newTodoList = todoItems.concat({id: uid++, text: inputEl.current.value});
        inputEl.current.value = '';
        setTodoItems(newTodoList);
        inputEl.current.focus();
    }

    function onKeydown(event) {
        if(event.key === 'Enter') {
            addTodoItem();
        }
    }

    return <div> <ul>{elements}</ul>
    <input onKeyDown={onKeydown} ref={inputEl} type="text"></input>
    <button onClick={addTodoItem}>Add</button>
    </div>;
} */

export default TodoList;