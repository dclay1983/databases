var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages for a room
    getAll: function (room, callback) {
      let q = `
        SELECT messages.id, users.name, messages.time, messages.text
          FROM users, messages
          INNER JOIN rooms
            ON messages.room_id = rooms.id
          WHERE rooms.name = ?
            AND users.id = messages.user_id;
      `;
      db.dbConnection.query(q, [room], (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    },

    // a function which can be used to insert a message into the database
    create: function (msg, callback) {
      let q = `
        INSERT INTO messages(user_id, room_id, time, text)
          VALUES((SELECT id FROM users WHERE name = ?), (SELECT id FROM rooms WHERE name = ?), ?, ?);
      `;
      db.dbConnection.query(q, msg, (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    }
  }
};


// for each message if (room id matches) = message = {
//   id:
//   user:
//   message:
//   time:
// }

// .query(sqlString, callback)

// connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
// //   // error will be an Error if one occurred during the query
//   // results will contain the results of the query
//   // fields will contain information about the returned results fields (if any)
// });

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }
