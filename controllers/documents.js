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
  get: function(req, res) {
    knex('users')
      .where({
        user_token:req.query.user_token
      })
      .then((data) => {
        let userID = data[0].id
        console.log('RAD', req.body.contactName)
        knex('contacts')
          .insert({
            contactName: req.body.contactName,
            streetAddress: req.body.streetAddress,
            street2: req.body.street2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            user_id: userID
          })
          .then(() => {
            res.sendStatus('200')
          })

      })
  },
}
