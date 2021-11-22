import {useRef, useState} from 'react';

export const description =
'The code in `src/problems/problem_3.js` is supposed to\
 add a new list item (with the text `"Item number {x}"`) every time the user clicks the "Add an item" button. However, it does not work.\
 In that file, modify the variable `explanation` to add a plain-English explanation of what is\
 going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = 'The setUserWrote() does not immediately change the state variable userWrote.\
Instead, it will change in the next function call';

export function Problem() {
    const [output, setOutput] = useState('Nothing yet');
    const inputRef = useRef();

    function onClick() {
        setOutput(`You wrote: ${inputRef.current.value}`);

        inputRef.current.value = '';
        inputRef.current.focus();
    }
    return <>
        <div>{output}</div>
        <input ref={inputRef} type="text" /><button className="btn btn-primary" onClick={onClick}>Display</button>
        <p>{explanation}</p>
    </>
}
