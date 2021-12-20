import { useState } from "react";

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

function addS(count){
    if(count === 1) {
        return '';
    } else {
        return 's'
    }
}

const SAVED_COUNTER_KEY = 'saved_counter';
const savedCounter = localStorage.getItem(SAVED_COUNTER_KEY);

function onCounterChanged(counter) {
    localStorage.setItem(SAVED_COUNTER_KEY, counter.toString());
}

export function Problem () {
    const initialCounter = savedCounter? parseInt(savedCounter): 0;

    const[counter, setCounter] = useState(initialCounter);
    return <div className="btn-group">
            <button className="btn btn-primary" onClick={() => {
                const newCounter = counter + 1;
                setCounter(newCounter);
                onCounterChanged(newCounter);
            }}>
                Clicked {counter} time{addS(counter)}</button>
            <button className="btn btn-secondary" onClick={() => {
                setCounter(0);
                onCounterChanged(0);
            }}>Reset</button>
        </div>;
    ;
}