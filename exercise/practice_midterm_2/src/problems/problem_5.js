import { useState } from "react";
export const description =
'Write code that starts counting up when the user clicks "Start".\
 in order to do this, you will need to use an [effect hook; `useEffect()`](https://reactjs.org/docs/hooks-effect.html)\
 (and [this explanation](https://reactgo.com/react-setinterval/) might help).';

let timer;
let startTime;

export function Problem() {
    const [seconds, setSeconds] = useState(0);
    
    function startCount(){
        if (timer){
            clearInterval(timer);
        }

        startTime = Date.now();
        timer = setInterval(() => {
            setSeconds(Date.now() - startTime);
        }, 1000);
    }

    return <>{Math.round(seconds/1000)}<button className="btn btn-primary" onClick={startCount}>Start</button></>;
}
