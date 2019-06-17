const fs = require('fs');

const bufferData = fs.readFileSync('book.json');
const dataJson = bufferData.toString();
const data = JSON.parse(dataJson);
console.log(data.title);


