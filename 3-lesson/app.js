const yargs = require('yargs');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('PRINT IN %s=====>','Yargs Add command',);
    }
})

/**
 * Run 
 * node app.js --help
 * node app.js --version
 * 
 */
console.log(yargs.argv)