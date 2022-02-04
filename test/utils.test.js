// IMPORT MODULES under test here:
import { 
    createCountString,    
} from '../utils.js';

const test = QUnit.test;

test('should return Youve changed the climate 4 ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You've changed the climate 4 `;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString('climate', 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});