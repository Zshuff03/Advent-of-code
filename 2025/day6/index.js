const { stringInput } = require('./input.js');
const fs = require('fs');
const lines = stringInput.split('\n');

const calculate = {
    '+': function (array) { return array.reduce((acc, val) => acc + val, 0) },
    '-': function (array) { return array.reduce((acc, val) => acc - val) },
    '*': function (array) { return array.reduce((acc, val) => acc * val, 1) },
    '/': function (array) { return array.reduce((acc, val) => acc / val, 1) }
};

let total = 0;
let numbers = [];
let builtNum = '';
for (let i = lines[0].length - 1; i >= 0; i--) {
    for (let j = 0; j < lines.length; j++) {
        const line = lines[j];
        const char = line[i];
        
        if(!!char.trim()) {
            if(Object.keys(calculate).includes(char)) {
                if(builtNum) {
                    numbers.push(parseInt(builtNum, 10));
                }
                total += calculateColumn(numbers, char);
                numbers = [];
                builtNum = '';
                break;
            }
            builtNum += char;
            continue;
        }

        if (!!builtNum.trim()) {
            numbers.push(parseInt(builtNum, 10));
            builtNum = '';
        }
    }
}

function calculateColumn(numbersArray, operand) {
    return calculate[operand](numbersArray);
}


console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify({total}, null, 3));

