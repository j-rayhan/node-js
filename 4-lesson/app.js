const yargs = require('yargs');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        console.log('PRINT IN %s=====>','Title : ', argv.title);
        console.log('PRINT IN %s=====>','Body : ', argv.body);
    }
})
// run node app.js add --title="Buy" --body="These are what i need to buy"
// Out-Put Show the Resust
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
 *  Challenge: Add an option to yargs
 * 
 * 1. Setup a body option for the add command
 * 2. Configure a description, make it require, and for it to be string
 * 3. Log the body value in the handler function
 * 4. Test your work!
 */
yargs.parse();