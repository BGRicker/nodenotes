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
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("\nNote created");
    notes.logNote(note)
  } else {
    console.log("Title already taken");
  };
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note)
  } else {
    console.log("note not found");
  };
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else {
  console.log('Command not recognized');
}
