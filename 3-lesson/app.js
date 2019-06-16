const yargs = require('yargs');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('PRINT IN %s=====>','Yargs Add command',);
    }
})
// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('PRINT IN %s=====>','Yargs Remove command',);
    }
})
/**
 * Run 
 * node app.js add
 * node app.js remove
 * 
 */
console.log(yargs.argv)