const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('true'));
console.log(_.uniq([2, 1, 2]));

console.log('result: ', notes.add(9, -2));

// var user = os.userInfo();
//
// fs.appendFile('hi.md', `Hi there ${user.username}, you are ${notes.age}\n`, function (err) {
//   if (err) {
//     console.log("couldn't write the file");
//   }
// });


