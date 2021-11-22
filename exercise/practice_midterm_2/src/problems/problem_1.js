import { useState } from "react";
export const description =
'The code in `src/problems/problem_1.js` is supposed to\
 display the text "You clicked the button" after the user clicks the button. However, it does not work.\
 In that file, modify the variable `explanation` to add a plain-English explanation of what is\
 going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = "As buttonClicked was not set as a state variable. \
We need to use useState(...) to let the page rerender after the buttonCLicked variable has changed";

export function Problem () {
    const [buttonClicked, setButtonClicked] = useState(false);

    function onClick() {
        setButtonClicked(true);
    }

    return <>
        <div>{buttonClicked ? "CLICKED!" : "not clicked yet"}</div>
        <button className="btn btn-primary" onClick={onClick}>Click me!</button>
        <p>{explanation}</p>
    </>
}
