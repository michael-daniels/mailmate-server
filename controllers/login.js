const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  get: function(req, res) {
    res.send('get')
  },
  post: function(req, res) {
    knex('users')
      .where({
        username: req.body.username
      })
      .then((user) => {
        console.log('USER', user)

        if (req.body.password === user[0].password) {
        let charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']
        let token = ''
        for (let i = 0; i < 32; i++) {
          token += charArray[(Math.random() * 61).toFixed(0)]
        }
        knex('users')
          .where({
            username: req.body.username
          })
          .update({
            user_token: token
          })
          .then(() => {
            res.redirect(`http://localhost:3000?user_token=${token}`)
          })

      } else {
        res.redirect('back')
      }

      })

  },
}
