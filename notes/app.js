console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
// var command = _.lowerCase(process.argv[2])
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv)

if (command === 'add') {
  note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("\nNote created\n---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Title already taken");
  };
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
