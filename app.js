// import functions and grab DOM elements
import {
    createCountString,
} from '../utils.js';

//containers for selects and images
const climateImage = document.getElementById('climate-image-menu');
const architectureImage = document.getElementById('architecture-image-menu');
const cultureImage = document.getElementById('culture-image-menu');
//get selects
const climateMenu = document.getElementById('climate-menu');
const architectureMenu = document.getElementById('architecture-menu');
const cultureMenu = document.getElementById('culture-menu');
//where the images go
const climateEl = document.getElementById('climate-image');
const architectureEl = document.getElementById('architecture-image');
const cultureEl = document.getElementById('culture-image');
//where the "number of changes" text goes
const climateText = document.getElementById('climate-count-display');
const architectureText = document.getElementById('architecture-count-display');
const cultureText = document.getElementById('culture-count-display');
//city slogans
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
    displayStats('climate', climateCount, climateText);
    //adjust container margin
    climateImage.style.setProperty('margin-bottom', '0px');
    //styleImagesOnClick(0);
});

architectureMenu.addEventListener('change', () => {
    //get value of dropdown
    const architectureChoice = architectureMenu.value;
    //increment count
    architectureCount++;
    //update DOM
    architectureEl.src = `../assets/${architectureChoice}.jpg`;
    //update stats
    displayStats('architecture', architectureCount, architectureText);
    //adjust container margin
    architectureImage.style.setProperty('margin-bottom', '0px');
});

cultureMenu.addEventListener('change', () => {
    //get value of dropdown
    const cultureChoice = cultureMenu.value;
    //increment count
    cultureCount++;
    //update DOM
    cultureEl.src = `../assets/${cultureChoice}.jpg`;
    //cultureText.textContent = createCountString('culture', cultureCount);
    displayStats('culture', cultureCount, cultureText);
    //adjust container margin
    cultureImage.style.setProperty('margin-bottom', '0px');
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

function displayStats(type, count, element) {
    const string = createCountString(type, count);
    element.textContent = string;
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