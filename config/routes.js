//Update the name of the controller below and rename the file.
const home = require("../controllers/home.js")
const contacts = require("../controllers/contacts.js")
const documents = require("../controllers/documents.js")
const login = require("../controllers/login.js")
const register = require("../controllers/register.js")

module.exports = function(app){

  app.get('/', home.index);
  app.get('/contacts', contacts.get);
  app.post('/contacts', contacts.post);
  app.get('/documents', documents.get);
  app.post('/documents', documents.post);
  app.post('/login', login.post);
  app.post('/register', register.post);

}
