const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    knex('users')
      .where({
        user_token:req.query.user_token
      })
      .then((data) => {
        let userID = data[0].id

        knex('documents')
          .where({
            user_id: userID
          })
          .then((data) => {
            res.json(data)
          })
      })
  },
}
