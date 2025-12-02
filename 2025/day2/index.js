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

       for (let len = 1; len <= testString.length / 2; len++) {
            // The string length must be divisible by the pattern length
            if (testString.length % len === 0) {
                const pattern = testString.substring(0, len);
                const repeats = testString.length / len;
                
                // Check if repeating this pattern creates the original string
                if (pattern.repeat(repeats) === testString) {
                    invalidIDs.push(testString);
                    log.push({ testString, pattern });
                    break; // Found a valid pattern, no need to check other lengths
                }
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
