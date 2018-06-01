const knex = require("../db/knex.js");

module.exports = {

  get: function(req, res) {
    knex('users')
      .where({
        user_token:req.query.user_token
      })
      .then((data) => {
        let userID = data[0].id

        knex('contacts')
          .where({
            user_id: userID
          })
          .then((data) => {
            console.log('Final contact data', data)
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
  delete: function(req, res) {
    knex('contacts')
      .where({
        id: req.params.id
      })
      .del()
      .then(() => {
        console.log('DELETED')
        res.sendStatus('200')
      })
  },
}
