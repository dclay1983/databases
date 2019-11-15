var models = require('../models');

module.exports = {
  users: {
    // a function which handles a get request for all users
    get: function (req, res) {
      models.users.getAll((err, results) => {
        if (err) {
          next(err);
        } else {
          res.send(results);
        }
      });
    },

    // a function which handles posting a user to the database
    post: function (req, res) {
      user = req.body[user];
      models.users.create(user, (err, results) => {
        if (err) {
          next(err);
        } else {
          res.send(results);
        }
      });
    }
  }
};
