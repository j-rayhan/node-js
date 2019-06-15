const validator = require('validator');

const isEmail = validator.isEmail('add@gmail.com');
const isNumber = validator.isNumeric(' 4');
console.log('======>', isNumber)