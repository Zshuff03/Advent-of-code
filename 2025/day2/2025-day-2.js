const { stringInput } = require('./chris-input.js');
const fs = require('fs');
const input = stringInput.split(',');



fs.writeFileSync('./log.json', JSON.stringify(countLog, null, 2));
