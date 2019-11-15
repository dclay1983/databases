var models = require('../models');

module.exports = {
  rooms: {
    // a function which handles a get request for all rooms
    get: function (req, res) {
      models.rooms.getAll((err, results) => {
        if (err) {
          next(err);
        } else {
          res.send(results);
        }
      });
    },

    // a function which handles posting a room to the database
    post: function (req, res) {
      room = req.body[room];
      models.rooms.create(room, (err, results) => {
        if (err) {
          next(err);
        } else {
          res.send(results);
        }
      });
    }
  }
};
