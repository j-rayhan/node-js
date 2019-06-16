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
 *  Challenge: Add two new commands
 * 
 * 1. Setup command to support "list" command (print placeholder message for now)
 * 2. Setup command to support "read" command (print placeholder message for now)
 * 3. Test your work by running both commands and ensure correct output
 * 
 */
console.log(yargs.argv)