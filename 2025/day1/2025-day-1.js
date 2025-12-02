const { stringInput } = require('./chris-input.js');
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


function countSteps(start, direction, steps) {
    let counter = start;
    for (let i = 0; i < steps; i++) {
        if (direction === 'R') {
            counter = (counter + 1) % 100;
        } else {
            counter = (counter - 1 + 100) % 100;
        }
        if (counter === 0) {
            password++;
        }
    }
    countLog.push({start, direction, steps, counter});
    return counter;
}
