const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  get: function(req, res) {
    res.send('get')
  },
  post: function(req, res) {
    if (req.body.username === 'michael' && req.body.password === 'haha') {
      let token = 'SQW3N8isa86prpXNszf4HPdUnZiVqkW0'
      res.redirect(`http://localhost:3000?user_token=${token}`)
    } else {
      res.redirect('back')
    }
  },
}
