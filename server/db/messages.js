var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    getAll: function (callback) {
      db.dbConnection.query('SELECT  messages.time, messages.text, messages.id, users.name FROM messages ')
    },

    // a function which can be used to insert a message into the database
    create: function () {

    }
  }
};
// for each message if (room id matches) = message = {
//   id:
//   user:
//   text:
//   time:
// }


.query(sqlString, callback)

connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
//   // error will be an Error if one occurred during the query
//   // results will contain the results of the query
//   // fields will contain information about the returned results fields (if any)
// });

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }
