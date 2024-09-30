
var counter = 0;

// opacity screen
var screen = document.querySelector(".screen");
var currentOpacity = parseFloat(window.getComputedStyle(screen).getPropertyValue("opacity"));
var minOp = 0.0;
var maxOp = 0.8;
var opIncrement = 0.1;

// smiley face image, its width, and its increment value
var smile = document.getElementById('smile');
var smileWidth = window.getComputedStyle(smile).getPropertyValue("width");
// var wIncrement = 50;

// constants for option status
const POSITIVE = "positive";
const NEGATIVE = "negative"

// an array of json objects of scenarios and options
const prompts = [
    {
        scenario: "You've been applying for jobs, but you're not hearing back from most and the interviews you did have weren't successful.",
        optionA: "You take time to learn new skills or improve your skills relevant to the career path you're interested in. You refine your resume, practice your interviewing skills, and continute to apply for new job opportunies.",
        optionA_status: POSITIVE,
        optionB: "You feel defeated, stay frusrated about it, and lose motivation to continue applying for jobs.",
        optionB_status: NEGATIVE
    },
    {
        scenario: "All your friends are back in town and you planned a fun day out for the weekend, but bad weather prevents you from carrying out your plans.",
        optionA: "Be disappointed and let it ruin the get-together you had planned.",
        optionA_status: NEGATIVE,
        optionB: "Organize plans for indoor activities instead and make the most of the time with your friends.",
        optionB_status: POSITIVE
    },
    {
        scenario: "You just gave a speech where you couldn't remember the next topic you wanted to speak about, causing you to stumble through the rest of the speech.",
        optionA: "Practice more and improve your public speaking skills for the next speech you give.",
        optionA_status: POSITIVE,
        optionB: "Avoid public speaking in the future and let the embarrassment consume you.",
        optionB_status: NEGATIVE
    },
    {
        scenario: "You're at work where a customer gets mad at you for how long they've waited in line.",
        optionA: "Let their comments roll off your back. The customer was probably having a bad day, and you're doing the best you can at this job.",
        optionA_status: POSITIVE,
        optionB: "Dwell on the interaction and let it affect your mood for the rest of the day.",
        optionB_status: NEGATIVE
    },
    {
        scenario: "You get stuck in traffic on your way to work or school due to a car accident that happened ahead. There's no other route for you to go around it, and it's going to cause you to be late.",
        optionA: "Continue to stress out and worry about being late for the rest of the drive.",
        optionA_status: NEGATIVE,
        optionB: "De-stress about being late by listening to music or a podcast. You might as well try to relax, you're stuck in the traffic either way.",
        optionB_status: POSITIVE
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

        // get current opacity and width of img
        currentOpacity = parseFloat(window.getComputedStyle(screen).getPropertyValue("opacity"));
        smileWidth = parseFloat(window.getComputedStyle(smile).getPropertyValue("width"));

        // check which button was clicked
        // then check the status according to that button in this scenario
        if (btn == document.querySelector('#btnA')) {
            console.log("button A clicked. status: " + prompts[counter].optionA_status);
            if (prompts[counter].optionA_status == POSITIVE) {
                positiveReaction();

            } else if (prompts[counter].optionA_status == NEGATIVE) {
                negativeReaction();
            }

        } else if (btn == document.querySelector('#btnB')) {
            console.log("button B clicked. status: " + prompts[counter].optionB_status);
            if (prompts[counter].optionB_status == POSITIVE) {
                positiveReaction();

            } else if (prompts[counter].optionB_status == NEGATIVE) {
                negativeReaction();
            }
        }

        // increment counter and check if reached end of scenarios
        counter++;
        if (counter >= prompts.length) {
            endScenarios();
            return;
        }

        // set scenario and options to the next one
        document.getElementById('scenario').innerHTML = prompts[counter].scenario;
        document.getElementById('optionA').innerHTML = prompts[counter].optionA;
        document.getElementById('optionB').innerHTML = prompts[counter].optionB;
    });
});

/**
 * Increases size of img width and brightens the background
 */
function positiveReaction() {
    smile.style.width = (smileWidth * 1.1) + "px";

    if (currentOpacity - opIncrement >= minOp)
        screen.style.opacity = currentOpacity - opIncrement; // make background brighter
    else
        screen.style.opacity = minOp; // keep opacity from becoming a negative value
}

/**
 * Decreases size of img width and darkens the background
 */
function negativeReaction() {
    smile.style.width = (smileWidth *  0.9) + "px";

    if (currentOpacity + opIncrement < maxOp)
        screen.style.opacity = currentOpacity + opIncrement; // make background darker
    else
        screen.style.opacity = maxOp; // keep opacity from going over 0.8
}

/**
 * When end of scenarios reached, show h1 title and hide prompt box
 */
function endScenarios() {
    if (currentOpacity >= 0.7) { // change text color to contrast better when background is darker
        document.querySelector("#life-quote").style.color = "lightgrey";
    }
    document.querySelector(".prompt-container").className = "prompt-container fade-out";
    document.querySelector("#life-quote").style.visibility = "visible";
    document.querySelector("#life-quote").className = "fade-in";
}
