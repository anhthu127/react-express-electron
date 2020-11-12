const express = require('express');

const routes = require('./routes');

var server = express();

/** 
 * Middlewares
 */
server.use(express.json());
const port = 3000
/**
 * Routes
 */
server.use(routes);
server.listen(port);
console.log('server listen in ' + port);
module.exports = server;