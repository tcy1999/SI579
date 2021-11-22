import {useState} from 'react';

export const description =
'Write code to create a `<button className="btn btn-secondary" />` element that\
 displays how many times it has been clicked. If it has been clicked {n} times\
 it should say "Clicked {n} time(s)". Your code should correctly handle pluralization\
 (for example, "Clicked 1 time" or "Clicked 2 time**s**")';

function addS(count){
    if(count === 1) {
        return '';
    } else {
        return 's'
    }
}

export function Problem() {
    const[counter, setCounter] = useState(0);
    return <button className="btn btn-primary" onClick={() => {const newCount = counter + 1; setCounter(newCount)}}>
        Clicked {counter} time{addS(counter)}</button>
}
