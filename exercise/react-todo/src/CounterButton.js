import { useState } from 'react';

function CounterButton() {
    let [count, updateCount] = useState(0);
    return <button onClick={() => updateCount(count++)}>You clicked me {count} times</button>
}

export default CounterButton;

// 22 左右 never put in block