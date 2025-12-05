const { stringInput } = require('./input.js');
const fs = require('fs');
const DBfile = stringInput.split('\n');
let total = 0;
let ranges = [];
for (let x = 0; x < DBfile.length; x++) {
    const dbLine = DBfile[x];
    if (dbLine.includes('-')) {
        
        const newRange = dbLine.split('-').map(Number)
        ranges.push(newRange);
        continue;
    }
    break;
}
ranges = ranges.sort((a, b) => a[0] - b[0]);
const dedupedRanges = [ranges[0]];

for (let j = 1; j < ranges.length; j++) {
    const testingRange = dedupedRanges[dedupedRanges.length - 1];

    if (testingRange[1] >= ranges[j][0]) {
        testingRange[1] = Math.max(testingRange[1], ranges[j][1]);
    } else {
        dedupedRanges.push(ranges[j]);
    }
}

for (const range of dedupedRanges) {
    const totalNumInRange = countNumbersInclusive(range[0], range[1]);
    total += totalNumInRange;
}
function countNumbersInclusive(num1, num2) {
  const min = Math.min(num1, num2) - 1;
  const max = Math.max(num1, num2) + 1;

  // If max - min is less than 2, there are no numbers exclusively between them.
  return Math.max(0, max - min - 1); 
}
console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify({ranges, dedupedRanges}, null, 3));
