const AccountController = require('./Controllers/AccountController')
const Response = require('./libs/handle_response')
const { Router } = require('express');
const routes = new Router();
routes.get('/aa', function (req, res) {
  res.send('Electron + React + Express');
});
log('api')
routes.post('/register', Response(AccountController.registAccount))
module.exports = routes;