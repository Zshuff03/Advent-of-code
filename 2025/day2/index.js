const { stringInput } = require('./input.js');
const fs = require('fs');
const input = stringInput.split(',');
const log = [];

const invalidIDs = [];
for (const range of input) {
    const rangeArray = range.split('-').map(numStr => parseInt(cleanID(numStr), 10));
    const start = rangeArray[0];
    const end = rangeArray[1];

    for (let i = start; i <= end; i++) {
        const testString = `${i}`;
        if (testString.length % 2 !== 0) {
            continue;
        }
        const firstHalf = testString.substring(0, Math.floor(testString.length / 2));
        const secondHalf = testString.substring(Math.ceil(testString.length / 2));

        if (firstHalf === secondHalf) {
            invalidIDs.push(testString);
        }
    }
}
let total = 0;
for (const id of invalidIDs) {
    total += parseInt(id, 10);
}
console.log(total);

fs.writeFileSync("./log.json", JSON.stringify(invalidIDs, null, 2));

function cleanID(id) {
    if(id[0] === '0') {
        return id.slice(1);
    }
    else return id;
}
