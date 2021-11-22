// function TodoItem(props) {
//     return <li>{props.description} <button onClick={props.onDone}>Done</button></li>
// }
function TodoItem(props) {
    console.log(`Rendered ${props.description}`);
    return <li>{props.description} <button onClick={() => props.onDone(props.id)}>Done</button></li>
}

export default TodoItem;