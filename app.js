// import functions and grab DOM elements
const climateMenu = document.getElementById('climate-menu');
const architectureMenu = document.getElementById('architecture-menu');
const cultureMenu = document.getElementById('culture-menu');
const climateEl = document.getElementById('climate-image');
const architectureEl = document.getElementById('architecture-image');
const cultureEl = document.getElementById('culture-image');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// let state
let climateCount = 0;
let architectureCount = 0;
let cultureCount = 0;

// set event listeners 
climateMenu.addEventListener('change', () => {
    //get value of dropdown
    const climateChoice = climateMenu.value;
    //increment count
    climateCount++;
    //update DOM
    climateEl.src = `../assets/${climateChoice}.jpg`;
    //update stats
});

architectureMenu.addEventListener('change', () => {
    //get value of dropdown
    const architectureChoice = architectureMenu.value;
    //increment count
    architectureCount++;
    //update DOM
    architectureEl.src = `../assets/${architectureChoice}.jpg`;
    //update stats
});

cultureMenu.addEventListener('change', () => {
    //get value of dropdown
    const cultureChoice = cultureMenu.value;
    //increment count
    cultureCount++;
    //update DOM
    cultureEl.src = `../assets/${cultureChoice}.jpg`;
    //update stats
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
