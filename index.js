var fs = require('fs');
const first = require('./database/1875.json');
// console.log(json);


fs.readFile("./database/1875.json", 'utf-8', (err, jsonString) => {
    console.log(jsonString);
});