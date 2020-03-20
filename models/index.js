const Sequelize = require("sequelize");
// const config = require("../../config/config");
// const board = require("./Board");

const db = {};

const sequelize = new Sequelize("test", "root", "0000", {
    host : "localhost",
    dialect : "mysql"
});

const Board = require("./Board")(sequelize, Sequelize);

db.Board = Board;
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
