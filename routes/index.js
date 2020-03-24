const express = require("express");
const route = express.Router();
const board = require('./board');
const auth = require('./auth');

route.use('/board', board);
route.use('/auth', auth);



module.exports = route;