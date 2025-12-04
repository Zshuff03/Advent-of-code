const { testInput } = require('./input.js');
const fs = require('fs');
const input = testInput.split('\n');
const log = [];

const joltages = [];
for (const bank of input) {
    let highestJoltageString = bank.slice(0, 12); 
    console.log('\n new battery bank: ', bank);
    let currentLowest = null;
    for (let i = 0; i < bank.length; i++) {
        if(!currentLowest) {
            currentLowest = parseInt(highestJoltageString, 10);
        }
        const currentChar = bank.charAt(i);
        const currentJoltage = parseInt(highestJoltageString, 10);
        
    }
    joltages.push(parseInt(highestJoltageString, 10));
}
let total = 0;
for (const joltage of joltages) {
    total += joltage;
}
console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify(joltages, null, 2));
