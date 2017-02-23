console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    // if try works then catch won't run, if try fails then catch runs
    
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  } else {
    console.log("couldn't save - duplicate body")
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log(`Getting note: ${title}`);
};

var removeNote = (title) => {
  console.log(`Removing note: ${title}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
