// import functions and grab DOM elements
import {
    createCountString,
} from '../utils.js';

const climateMenu = document.getElementById('climate-menu');
const architectureMenu = document.getElementById('architecture-menu');
const cultureMenu = document.getElementById('culture-menu');
const climateEl = document.getElementById('climate-image');
const architectureEl = document.getElementById('architecture-image');
const cultureEl = document.getElementById('culture-image');
const climateText = document.getElementById('climate-count-display');
const architectureText = document.getElementById('architecture-count-display');
const cultureText = document.getElementById('culture-count-display');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganEl = document.getElementById('slogan-display');

// let state
let climateCount = 0;
let architectureCount = 0;
let cultureCount = 0;
let slogansArray = [];

// set event listeners 
climateMenu.addEventListener('change', () => {
    //get value of dropdown
    const climateChoice = climateMenu.value;
    //increment count
    climateCount++;
    //update DOM
    climateEl.src = `../assets/${climateChoice}.jpg`;
    //update stats
    climateText.textContent = createCountString('climate', climateCount);
});

architectureMenu.addEventListener('change', () => {
    //get value of dropdown
    const architectureChoice = architectureMenu.value;
    //increment count
    architectureCount++;
    //update DOM
    architectureEl.src = `../assets/${architectureChoice}.jpg`;
    //update stats
    architectureText.textContent = createCountString('architecture', architectureCount);
});

cultureMenu.addEventListener('change', () => {
    //get value of dropdown
    const cultureChoice = cultureMenu.value;
    //increment count
    cultureCount++;
    //update DOM
    cultureEl.src = `../assets/${cultureChoice}.jpg`;
    //update stats
    cultureText.textContent = createCountString('culture', cultureCount);
});

sloganButton.addEventListener('click', () => {
    //get user input
    const newSlogan = sloganInput.value;
    //update state
    slogansArray.push(newSlogan);
    //clear input
    sloganInput.value = '';
    //update DOM
    displaySlogans(slogansArray);
});

function displayStats() {
    
}

function displaySlogans(slogan) {
    //update DOM
    sloganEl.textContent = '';
    //loop through the slogans to display
    for (slogan of slogansArray) {
        //create HTML element with slogan as content
        const sloganPara = document.createElement('p');
        sloganPara.textContent = slogan;
        //and append to DOM
        sloganEl.appendChild(sloganPara);
    }
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
