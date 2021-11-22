function TodoItem(props) {
    const { text } = props;
    function deleteTask() {
        if(props.onDelete) {
            props.onDelete();
        }
    }
    return <li>{text} <button onClick={deleteTask}>Delete</button></li>;
}

export default TodoItem;