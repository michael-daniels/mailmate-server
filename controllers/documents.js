const knex = require("../db/knex.js");

module.exports = {

  get: function(req, res) {
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
  post: function(req, res) {
    knex('users')
      .where({
        user_token:req.query.user_token
      })
      .then((data) => {
        let userID = data[0].id
        console.log('RAD', req.body.title)
        knex('documents')
          .insert({
            title:req.body.title,
            content:req.body.content,
            user_id:userID
          })
          .then(() => {
            res.sendStatus('200')
          })

      })
  },
}
