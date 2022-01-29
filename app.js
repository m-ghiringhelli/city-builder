// import functions and grab DOM elements
import {
    createCountString,
} from '../utils.js';

//containers for selects and images
const climateContainer = document.getElementById('climate-image-menu');
const archContainer = document.getElementById('architecture-image-menu');
const cultureContainer = document.getElementById('culture-image-menu');
//get selects
const climateSelect = document.getElementById('climate-menu');
const archSelect = document.getElementById('architecture-menu');
const cultureSelect = document.getElementById('culture-menu');
//where the images go
const climateImage = document.getElementById('climate-image');
const archImage = document.getElementById('architecture-image');
const cultureImage = document.getElementById('culture-image');
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
climateSelect.addEventListener('change', () => {
    //get value of dropdown
    const climateChoice = climateSelect.value;
    //increment count
    climateCount++;
    //update DOM
    climateImage.src = `../assets/${climateChoice}.jpg`;
    //update stats
    displayStats('climate', climateCount, climateText);
    //adjust container margin
    climateContainer.style.setProperty('margin-bottom', '0px');
    //styleImagesOnClick(0);
});

archSelect.addEventListener('change', () => {
    //get value of dropdown
    const architectureChoice = archSelect.value;
    //increment count
    architectureCount++;
    //update DOM
    archImage.src = `../assets/${architectureChoice}.jpg`;
    //update stats
    displayStats('architecture', architectureCount, architectureText);
    //adjust container margin
    archContainer.style.setProperty('margin-bottom', '0px');
});

cultureSelect.addEventListener('change', () => {
    //get value of dropdown
    const cultureChoice = cultureSelect.value;
    //increment count
    cultureCount++;
    //update DOM
    cultureImage.src = `../assets/${cultureChoice}.jpg`;
    //cultureText.textContent = createCountString('culture', cultureCount);
    displayStats('culture', cultureCount, cultureText);
    //adjust container margin
    cultureContainer.style.setProperty('margin-bottom', '0px');
});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInput.value;
    //update state
    //add quotes if none provided
    if (newSlogan[0] === `"` || newSlogan[0] === `'`) {
        slogansArray.push(newSlogan); 
    } else {
        slogansArray.push(`"` + newSlogan + `"`);
    }
    //clear input
    sloganInput.value = '';
    //update DOM
    displaySlogans(slogansArray);
});

sloganInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sloganButton.click();
    }
});

function displayStats(type, count, element) {
    const string = createCountString(type, count);
    element.textContent = string;
}

function displaySlogans(slogan) {
    //get user input
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