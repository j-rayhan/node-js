const yargs = require('yargs');
const command = process.argv;

/**
 * Run this in Terminal to show more diff
 * node app.js --title="Hi I am Rayhan"
 * OR
 * node app.js Johir --title="Hi I am Rayhan"
 * 
 */
console.log('PRINT IN %s=====>','Process', command);
console.log('PRINT IN %s=====>','Yargs',yargs.argv);
