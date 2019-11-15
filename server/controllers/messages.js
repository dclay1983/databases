var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res, next) {
      room = req.body.room;
      models.messages.getAll(room, (err, results) => {
        if (err) {
          next(err);
        } else {
          res.send(results);
        }
      });
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      msg = [req.body[user], req.body[room], new Date(), req.body[message]];
      models.messages.create(msg, (err, results) => {
        if (err) {
          next(err);
        } else {
          res.send(results);
        }
      });
    }
  }
};