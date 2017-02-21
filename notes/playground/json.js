// var obj = {
//   name: 'Ben'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Ben", "age": 30}';
// var person = JSON.parse(personString);
//
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Cool title',
  body: 'Cool body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
