console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  };
};

var savedNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    savedNotes(notes);
    console.log(`\nadded note: ${note.title} - ${note.body}`);
    return note;
  } else {
    console.log("\ncouldn't save - duplicate body")
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
