console.log('starting');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

fs.appendFile('hi.md', `Hi there ${user.username}, you are ${notes.age}\n`, function (err) {
  if (err) {
    console.log("couldn't write the file");
  }
});
