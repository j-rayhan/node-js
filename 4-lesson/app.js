const yargs = require('yargs');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
        }
    },
    handler: (argv) => {
        console.log('PRINT IN %s=====>','Yargs Add command', argv);
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

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing out all notes',
    handler: () => {
        console.log('PRINT IN %s=====>','Yargs List command',);
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('PRINT IN %s=====>','Yargs Read command',);
    }
})
/**
 *  node app.js read
 *  node app.js list
 */
console.log(yargs.argv)