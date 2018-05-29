const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.json(
      [{
      contactName: 'Gina Smith',
      streetAddress: '123 South Main',
      street2: 'Apt 2',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85613',
    },
    {
      contactName: 'Michael Daniels',
      streetAddress: '8031 W Hilton Ave',
      street2: '',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85613',
    },
    {
      contactName: 'Jimmy Carter',
      streetAddress: '123 South Main',
      street2: 'Apt 2',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85613',
    },
    {
      contactName: 'Chris Farley',
      streetAddress: '123 South Main',
      street2: 'Apt 2',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85613',
    },
    {
      contactName: 'James Brown',
      streetAddress: '123 South Main',
      street2: 'Apt 2',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85613',
    }]
  );
  },
}
