const { testInput } = require('./input.js');
const fs = require('fs');
const input = testInput.split(',');
const log = [];

const invalidIDs = [];
for (const range of input) {
    const rangeArray = range.split('-').map(numStr => parseInt(numStr, 10));
    const start = rangeArray[0];
    const end = rangeArray[1];

    for (let i = start; i <= end; i++) {
        const testString = i.toString();

        let pattern = '';
        console.log('\n',testString);
        if (testString.length === 2 && testString.charAt(0) === testString.charAt(1)) {
            invalidIDs.push(testString);
            log.push({testString, pattern: testString.charAt(0)});
            continue;
        }

        for (let j = 0; j <= testString.length; j++) {
            const currentChar = testString.charAt(j);
            if (j <= 2) {
                continue;
            }
            pattern = `${pattern}${currentChar}`;
            const patternRegex = new RegExp(pattern, 'g');
            if(testString.replaceAll(patternRegex, '').length === 0) {
                log.push({testString, pattern});
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
