const { stringInput } = require('./input.js');
const fs = require('fs');
const input = stringInput.split(',');
const log = [];

const invalidIDs = [];
for (const range of input) {
    const rangeArray = range.split('-').map(numStr => parseInt(numStr, 10));
    const start = rangeArray[0];
    const end = rangeArray[1];
    for (let i = start; i <= end; i++) {
        const testString = i.toString();

        let buildingStart = true;
        let startingPattern = '';
        let checkingPattern = '';
        for (let j = 0; j <= testString.length; j++) {
            const currentChar = testString.charAt(j);
            if (currentChar === startingPattern[0]) {
                buildingStart = false;
            }

            if (buildingStart) {
                startingPattern = `${startingPattern}${currentChar}`;
            } else {
                checkingPattern = `${checkingPattern}${currentChar}`;
            }

            if (startingPattern === checkingPattern) {
                invalidIDs.push(testString);
                break;
            }
        }
    }
}
let total = 0;
for (const id of invalidIDs) {
    total += parseInt(id, 10);
}
console.log(total);

fs.writeFileSync("./log.json", JSON.stringify(invalidIDs, null, 2));
