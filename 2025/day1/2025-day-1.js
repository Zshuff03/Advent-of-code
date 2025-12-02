const { stringInput } = require('../input.js');
const fs = require('fs');
const input = stringInput.split('\n');

let password = 0;
let counter = 50;
let countLog = [];
for (let i = 0; i < input.length; i++) {
    const rotationObj = input[i];
    console.log(rotationObj);
    const direction = rotationObj.charAt(0);
    const steps = parseInt(rotationObj.slice(1), 10);
    counter = countSteps(counter, direction, steps);
}

console.log('final password: ', password);

fs.writeFileSync('./log.json', JSON.stringify(countLog, null, 2));


function countSteps(start, rotation, steps) {
    let counter = start;
    if (rotation === "L") {
      steps = steps * -1;
    }

    const finalPos = start + steps;

    if (finalPos <= 0 || finalPos >= 100) {
      password += 1;
    }
    
    if (finalPos < 0) {
        counter = finalPos + 100;
    } else if (finalPos >= 100) {
        counter = finalPos % 100;
    } else {
        counter = finalPos;
    }
    countLog.push({start, rotation, steps, counter})


    return counter;
}
