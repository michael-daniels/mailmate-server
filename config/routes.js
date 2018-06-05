//Update the name of the controller below and rename the file.
const home = require("../controllers/home.js")
const contacts = require("../controllers/contacts.js")
const documents = require("../controllers/documents.js")
const login = require("../controllers/login.js")
const register = require("../controllers/register.js")
const lobcontroller = require("../controllers/lobcontroller.js")

module.exports = function(app){

  app.get('/', home.index);
  app.get('/contacts', contacts.get);
  app.post('/contacts', contacts.post);
  app.get('/documents', documents.get);
  app.post('/documents', documents.post);
  app.post('/login', login.post);
  app.post('/register', register.post);
  app.post('/delete_contact/:id', contacts.delete);
  app.post('/delete_document/:id', documents.delete);
  app.post('/edit_contact/:id', contacts.edit);
  app.post('/edit_document/:id', documents.edit);
  app.post('/send_mail', lobcontroller.get);

}
