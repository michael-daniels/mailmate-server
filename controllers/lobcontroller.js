const knex = require("../db/knex.js");
const Lob = require('lob')('test_8a36131f416b3c3a5c9a38e5ab09afd56e7');

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  get: function(req, res) {
    console.log('DOCUMENT', req.body[0])
    console.log('RECIPIENT', req.body[1])

    let theDocument = req.body[0];
    let recipient = req.body[1];

    let htmlContent = theDocument.content.replace(/\n\n/g, '<br /><div style="margin:25px 0"></div>');

    Lob.letters.create({
      description: 'Demo Letter',
      to: {
        name: recipient.contactName,
        address_line1: recipient.streetAddress,
        address_line2: recipient.street2,
        address_city: recipient.city,
        address_state: recipient.state,
        address_zip: recipient.zip,
        address_country: 'US',
      },
      from: {
        name: 'Mailmate',
        address_line1: '8031 W Hilton Ave',
        address_line2: '',
        address_city: 'Phoenix',
        address_state: 'AZ',
        address_zip: '85043',
        address_country: 'US',
      },
      file: `<html style="padding-top: 3in; margin: .5in; font-size:12px">${htmlContent}</html>`,
      merge_variables: {
        name: recipient.contactName,
      },
      color: true
      }, function (err, res) {
        console.log(err, res);
    })
  .then((response) => {
    knex('history')
      .insert({
        date_created: response.date_created,
        mail_type: response.mail_type,
        carrier: response.carrier,
        tracking_number: response.tracking_number,
        img_url: response.url,
        small_thumbnail: response.thumbnails[0].small,
        medium_thumbnail: response.thumbnails[0].medium,
        expected_delivery_date: response.expected_delivery_date,
        recipient_name: response.to.name,
        recipient_street: response.to.address_line1,
        recipient_street2: response.to.address_line2,
        recipient_city: response.to.address_city,
        recipient_state: response.to.address_state,
        recipient_zip: response.to.address_zip,
        user_id: recipient.user_id
      })
      .then(() => {
        res.sendStatus('200')
      })
  })
  },

}
