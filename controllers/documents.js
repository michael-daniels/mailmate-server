const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    console.log(req.query.user_token)
    res.json(
      [
        {
          title: 'Collection Notice',
          content: 'Your mom'
        },
        {
          title: 'Violation Notice',
          content: 'Your dad'
        },
        {
          title: 'Thank You Letter',
          content: 'Thanks, bitch.'
        },
        {
          title: 'Marketing Bullshit',
          content: 'Some bull, some shit.'
        },
        {
          title: 'Sales Letter',
          content: 'Dat shit'
        },
      ]
  );
  },
}
