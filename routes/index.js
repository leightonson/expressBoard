const express = require("express");
const route = express.Router();
const board = require('./board');
const user = require('./user');

route.use('/board', board);
route.use('/user', user);



module.exports = route;