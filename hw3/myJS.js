/*
* Excercise 1
*
*/

const block = document.getElementById("color-block");
block.addEventListener("click", changeColor);
const colorText = document.getElementById("color-name");

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    const cl = block.getAttribute("class");
    //Write a condition determine what color it should be changed to
    if(cl === "mycolor"){
        //change the background color using JS
        // block.classList.remove("mycolor");
        //Change the text of the color using the span id color-name
        colorText.textContent = "#F08080";
    }
    else{
        //change the background color using JS
        // block.setAttribute("class", "mycolor");
        //Change the text of the color using the span id color-name
        colorText.textContent = "#00838F";
    }
    block.classList.toggle('mycolor');
}


// let isClicked = false;

// /*
// * Then write a function that changes the text and the color inside the div
// *
// */

// function changeColor(){
//     //Write a condition determine what color it should be changed to
//     if(isClicked){
//         //change the background color using JS
//         block.style.backgroundColor = "#F08080";
//         //Change the text of the color using the span id color-name
//         colorText.textContent = "#F08080";
//     }
//     else{
//         //change the background color using JS
//         block.style.backgroundColor = "#00838F";
//         //Change the text of the color using the span id color-name
//         colorText.textContent = "#00838F";
//     }
//     isClicked = !isClicked;
// }


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const button = document.getElementById("convertbtn");
button.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let temp = document.getElementById("f-input").value;
    temp = ((temp - 32) * 5/9).toFixed(2);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").textContent = temp;
}


