const knex = require("../db/knex.js");

module.exports = {

  get: function(req, res) {
    knex('users')
      .where({
        user_token:req.query.user_token
      })
      .then((data) => {
        let userID = data[0].id

        knex('history')
          .where({
            user_id: userID
          })
          .then((data) => {
            console.log('Final history data', data)
            res.json(data)
          })
      })
  },
}
