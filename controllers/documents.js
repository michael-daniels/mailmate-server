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
  delete: function(req, res) {
    knex('documents')
      .where({
        id: req.params.id
      })
      .del()
      .then(() => {
        console.log('DELETED')
        res.sendStatus('200')
      })
  },
  edit: function(req, res) {
    console.log(req.h)
    knex('documents')
      .where({
        id: req.params.id
      })
      .update({
        title: req.body.title,
        content: req.body.content,
      })
      .then(() => {
        console.log('UPDATED')
        res.sendStatus('200')
      })
  },
}
