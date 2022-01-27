// import functions and grab DOM elements
const climateMenu = document.getElementById('climate-menu');
const architectureMenu = document.getElementById('architecture-menu');
const cultureMenu = document.getElementById('culture-menu');

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
    console.log(climateChoice);
    //increment count
    //update DOM
    //update stats
});

architectureMenu.addEventListener('change', () => {
    //get value of dropdown
    const architectureChoice = architectureMenu.value;
    console.log(architectureChoice);
    //increment count
    //update DOM
    //update stats
});

cultureMenu.addEventListener('change', () => {
  //get value of dropdown
    const cultureChoice = cultureMenu.value;
    console.log(cultureChoice);
  //increment count
  //update DOM
  //update stats
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
