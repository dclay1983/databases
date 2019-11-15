var db = require('../db');

models.exports = {
  rooms: {
    // a function which produces all the users
    getAll: function (callback) {
      q = 'SELECT * FROM users;';
      db.dbConnection.query(q, (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    },

    // a function which can be used to insert a user into the database
    create: function (user, callback) {
      let q = 'INSERT INTO users(name) VALUES(?);';
      db.dbConnection.query(q, user, (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    }
  }
};
