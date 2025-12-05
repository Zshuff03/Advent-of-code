const { stringInput } = require('./input.js');
const fs = require('fs');
const DBfile = stringInput.split('\n');

const freshIngredients = [];
const ranges = [];
for (let x = 0; x < DBfile.length; x++) {
    console.log('processing line', DBfile[x]);
    const dbLine = DBfile[x];
    if (dbLine.includes('-')) {
        console.log('range found', dbLine);
        ranges.push(dbLine.split('-').map(Number));
        continue;
    }
    const ingredientId = parseInt(dbLine, 10);
    if (!isNaN(ingredientId)) {
        console.log('checking ingredient id', ingredientId);
        for(let i = 0; i < ranges.length; i++) {
            if (ingredientId >= ranges[i][0] && ingredientId <= ranges[i][1]) {
                console.log('ingredient id is in range', ranges[i], `pushing ${ingredientId} to freshIngredients`);
                freshIngredients.push(ingredientId);
                break;
            }
        }
    }
}
console.log(`${freshIngredients.length}`);

fs.writeFileSync("./log.json", JSON.stringify({ranges, freshIngredients}, null, 3));
