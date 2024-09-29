
var counter = 0;
var animationCtr = 2;

var screen = document.querySelector(".screen2");
var currentOpacity = parseFloat(window.getComputedStyle(screen).getPropertyValue("opacity"));
console.log("current opacity: " + currentOpacity);

var smile = document.getElementById('smile');
var smileWidth = window.getComputedStyle(smile).getPropertyValue("width");
var wIncrement = 50;
console.log("width: " + window.getComputedStyle(smile).getPropertyValue("width"));

const POSITIVE = "positive";
const NEGATIVE = "negative"

/* an array of json objects of scenarios and options */
const prompts = [
    {
        scenario: "description 1",
        optionA: "option 1A +",
        optionA_status: POSITIVE,
        optionB: "option 1B -",
        optionB_status: NEGATIVE,
    },
    {
        scenario: "description 2",
        optionA: "option 2A -",
        optionA_status: NEGATIVE,
        optionB: "option 2B +",
        optionB_status: POSITIVE,
    },
    {
        scenario: "description 3",
        optionA: "option 3A +",
        optionA_status: POSITIVE,
        optionB: "option 3B -",
        optionB_status: NEGATIVE,
    }
]

// start scenario
document.getElementById('scenario').innerHTML = prompts[counter].scenario;
document.getElementById('optionA').innerHTML = prompts[counter].optionA;
document.getElementById('optionB').innerHTML = prompts[counter].optionB;

// add event listener to each button (both buttons would not be pressed at same time, so OK for event listener on each)
let buttons = document.querySelectorAll('.button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentOpacity = parseFloat(window.getComputedStyle(screen).getPropertyValue("opacity"));
        smileWidth = window.getComputedStyle(smile).getPropertyValue("width");

        // check which button was clicked
        // then check the status according to that button in this scenario
        if (btn == document.querySelector('#btnA')) {
            // console.log("opacity before clicking: " + currentOpacity);
            console.log("button A clicked. status: " + prompts[counter].optionA_status);
            if (prompts[counter].optionA_status == POSITIVE) {
                positiveReaction();
                // smile.style.width = (parseFloat(window.getComputedStyle(smile).getPropertyValue("width")) + wIncrement) + "px";
                // // console.log("width after +: " + window.getComputedStyle(smile).getPropertyValue("width"));

                // if (currentOpacity - 0.1 >= 0)
                //     screen.style.opacity = currentOpacity - 0.1; // make image brighter
                // else
                //     screen.style.opacity = 0; // keep opacity from becoming an negative value

            } else if (prompts[counter].optionA_status == NEGATIVE) {
                negativeReaction();
                // console.log(currentOpacity + 0.1);
                // if (currentOpacity + 0.1 < 0.8)
                //     screen.style.opacity = currentOpacity + 0.1; // make image darker
                // else
                //     screen.style.opacity = 0.8; // keep opacity from going over 1
            }
            // console.log("opacity after clicking: " + screen.style.opacity);
        } else if (btn == document.querySelector('#btnB')) {
            // console.log("opacity before clicking: " + currentOpacity);
            console.log("button B clicked. status: " + prompts[counter].optionB_status);
            if (prompts[counter].optionB_status == POSITIVE) {
                positiveReaction();
                // smile.style.width = (parseFloat(window.getComputedStyle(smile).getPropertyValue("width")) - wIncrement) + "px";

                // if (currentOpacity - 0.1 >= 0)
                //     screen.style.opacity = currentOpacity - 0.1; // make image brighter
                // else
                //     screen.style.opacity = 0; // keep opacity from becoming an negative value

            } else if (prompts[counter].optionB_status == NEGATIVE) {
                negativeReaction();
                // console.log(currentOpacity + 0.1);
                // if (currentOpacity + 0.1 < 0.8)
                //     screen.style.opacity = currentOpacity + 0.1; // make image darker
                // else
                //     screen.style.opacity = 0.8; // keep opacity from going over 1
            }
            // console.log("opacity after clicking: " + screen.style.opacity);
        }

        // increment counter and loop back if gone thru all of them
        counter++;
        if (counter >= prompts.length) {
            counter = 0; // can instead do this with counter = counter+1 % prompts.length on line above
        }

        // set scenario and options to the next one
        document.getElementById('scenario').innerHTML = prompts[counter].scenario;
        document.getElementById('optionA').innerHTML = prompts[counter].optionA;
        document.getElementById('optionB').innerHTML = prompts[counter].optionB;
    });
});

function positiveReaction() {
    smile.style.width = (parseFloat(window.getComputedStyle(smile).getPropertyValue("width")) + wIncrement) + "px";

    if (currentOpacity - 0.1 >= 0)
        screen.style.opacity = currentOpacity - 0.1; // make image brighter
    else
        screen.style.opacity = 0; // keep opacity from becoming an negative value
}

function negativeReaction() {
    smile.style.width = (parseFloat(window.getComputedStyle(smile).getPropertyValue("width")) - wIncrement) + "px";
    if (currentOpacity + 0.1 < 0.8)
        screen.style.opacity = currentOpacity + 0.1; // make image darker
    else
        screen.style.opacity = 0.8; // keep opacity from going over 1
}

// document.querySelector('.button').addEventListener('click', function () {
//     console.log("button clicked");

//     document.getElementById('scenario').innerHTML = prompts[counter].scenario;
//     document.getElementById('optionA').innerHTML = prompts[counter].optionA;
//     document.getElementById('optionB').innerHTML = prompts[counter].optionB;

//     counter++;
//     if (counter >= prompts.length) {
//         counter = 0; // can instead do this with counter = counter+1 % prompts.length on line above
//     }

// });


// setTimeout(function() {
//     document.getElementById('prompt3').style.visibility = "hidden";
// }, 5000);