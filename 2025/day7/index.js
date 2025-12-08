const { stringInput, testInput } = require('./input.js');
const fs = require('fs');
const input = stringInput.split('\n');

let beams = [input[0].indexOf('S')];
for (let i = 1; i < input.length - 1; i++) {
    const line = input[i];
    let newBeams = []
    for (let j = 0; j < beams.length; j++) {
        const beamIndex = beams[j];
        if (line[beamIndex] === '^') {
            newBeams.push(beamIndex - 1)
            newBeams.push(beamIndex + 1);
        }
    }
    if (newBeams.length > 0) {
        beams = newBeams
    }
}
console.log(beams.length - 1);

fs.writeFileSync("./log.json", JSON.stringify({beams}, null, 3));
