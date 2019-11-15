var db = require('../db');

models.exports = {
  rooms: {
    // a function which produces all the rooms
    getAll: function (callback) {
      q = 'SELECT * FROM rooms;';
      db.dbConnection.query(q, (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    },

    // a function which can be used to insert a room into the database
    create: function (room, callback) {
      let q = 'INSERT INTO rooms(name) VALUES(?);';
      db.dbConnection.query(q, [room], (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    }
  }
};
