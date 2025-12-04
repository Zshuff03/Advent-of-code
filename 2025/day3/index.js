const { stringInput } = require('./input.js');
const fs = require('fs');
const input = stringInput.split('\n');
const log = [];

const joltages = [];
for (const bank of input) {
    let highestJoltage = '';
    let cursor = 0;
    for (let j = 0; j < 12; j++) {
        let highestChar = 0;
        let bestIndex = -1
        let searchLimit = bank.length - (11 - j);
        for (let i = cursor; i < searchLimit; i++) {
            const val = parseInt(bank[i], 10);
            // Find the largest digit. If equal, we keep the first one found (strict >)
            if (val > highestChar) {
                highestChar = val;
                bestIndex = i;
            }
        }
        highestJoltage += highestChar.toString();
        cursor = bestIndex + 1;
    }
    joltages.push(parseInt(highestJoltage, 10));
}
let total = 0;
for (const joltage of joltages) {
    total += joltage;
}
console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify(joltages, null, 2));
