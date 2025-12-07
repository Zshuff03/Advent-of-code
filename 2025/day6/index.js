const { stringInput } = require('./input.js');
const fs = require('fs');
const input = stringInput.split('\n');
let total = 0;
const numbers = [];

for (let x = 0; x < input.length; x++) {
    const numbers = input[x].split(' ').map(n => parseInt(n, 10));
}



console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify({ranges, dedupedRanges}, null, 3));
