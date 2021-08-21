// Grab the count-el h2 and store it in a variable called countEl
let countEl= document.getElementById("count-el");
// Grab the save-el paragrah and store it in a variable called saveEl
let saveEl= document.getElementById("save-el");
// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count += 1;
    // change the count-el in the HTML to reflect the new count
    countEl.textContent = count;
}

function save() {
    //Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - ";
    //Render the variable in the saveEl using innerText
    //Make sure to not delete the existing content of the paragraph
    saveEl.textContent += countStr;
    
    // set count-el to 0 and count to 0
    countEl.textContent = 0;
    count = 0;
}

