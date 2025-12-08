const { stringInput } = require('./input.js');
const fs = require('fs');
const input = stringInput.split('\n');
const solved = [];
let total = 0;
const numbers = [];
const operations = input.pop().split(' ').map(op => op.trim()).filter(op => !!op);

const calculate = {
    '+': function (array) { return array.reduce((acc, val) => acc + val, 0) },
    '-': function (array) { return array.reduce((acc, val) => acc - val) },
    '*': function (array) { return array.reduce((acc, val) => acc * val, 1) },
    '/': function (array) { return array.reduce((acc, val) => acc / val, 1) }
};

for (let i = 0; i < input.length; i++) {
    const numberLine = input[i].trim().split(' ').filter(n => !!n);
    for (let j = 0; j < numberLine.length; j++) {
        const numberColumn = numbers[j] || [];
       numberColumn.push(parseInt(numberLine[j].trim(), 10));
       numbers[j] = numberColumn;
    }
}

console.log(numbers);
for (let k = 0; k < operations.length; k++) {
    const operation = operations[k];
    let lineTotal = 0;
    console.log('running operation', operation, 'on numbers', numbers[k]);
    const numberColumn = numbers[k];
    lineTotal += calculate[operation](numberColumn);
    console.log('line total', lineTotal);
    solved.push(lineTotal);
    total += lineTotal;
}


console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify({numbers, operations, solved, total}, null, 3));

