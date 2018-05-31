const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  get: function(req, res) {
    res.send('get')
  },
  post: function(req, res) {
    let token = 'SQW3N8isa86prpXNszf4HPdUnZiVqkW3'

    knex('users')
      .insert({
        username: req.body.username,
        password: req.body.password,
        user_token: token
      })
      .then(() => {
        res.redirect(`http://localhost:3000?user_token=${token}`)
      })
  },
}
