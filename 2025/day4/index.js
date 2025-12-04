const { stringInput } = require('./input.js');
const fs = require('fs');
const grid = stringInput.split('\n');
let total = 0;
let hasRemoved = true;
while(hasRemoved == true) {
    hasRemoved = false;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
                currentIndex = grid[x][y];
                console.log('\n\n',{x, y, currentIndex});
                if(currentIndex != '@') {
                    continue;
                }

                if (getTotalAdjacent(x, y, grid) < 4) {
                    total++;
                    hasRemoved = true;
                    grid[x] = grid[x].substring(0, y) + '.' + grid[x].substring(y + 1);
                }

        }
    }
}
console.log(`${total}`);

fs.writeFileSync("./log.json", JSON.stringify(total, null, 2));


function getTotalAdjacent(x, y, grid) {
    const indeciesToCheck = [-1, 0, 1];
    totalAdjacent = 0;

    for (let i = 0; i < indeciesToCheck.length; i++) {
        for (let j = 0; j < indeciesToCheck.length; j++) {
            const checkingX = x + indeciesToCheck[i];
            const checkingY = y + indeciesToCheck[j];

            if (checkingX === x && checkingY === y) {
                continue;
            }

            const item = grid[checkingX]?.[checkingY];
            console.log('checking item at', {checkingX, checkingY, item});
            if (item && item === '@') {
                totalAdjacent++;
            }
        }
    }

    return totalAdjacent;
}