const fs = require('fs');

// const bufferData = fs.readFileSync('book.json');
// const dataJson = bufferData.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

/**
 *  Challenge: Work with JSON and the file system
 * 
 * 1. Load and parse the JSON data
 * 2. Change the name and age property using your info
 * 3. Stringify the changed object and overwrite the original data
 * 4. Test your work by viewing data in the JSON file
 */
const bufferData = fs.readFileSync('book.json');
const dataJson = bufferData.toString();
const data = JSON.parse(dataJson);

data.title = "New title"
data.author = "Johir Ray"

const JSONdata = JSON.stringify(data);

fs.writeFileSync('book.json', JSONdata);