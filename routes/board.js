const express = require("express");
const route = express.Router();
const boardController = require('../controllers/board')
const authController = require('../controllers/auth')

//글쓰기 api 경로
route.post("/", authController.authCheck, boardController.writeOne)

//글목록보기 api 경로
route.get("/list", boardController.readAll)


//글읽기 api 경로
route.get("/:id", boardController.readOne)

route.delete("/:id", boardController.deleteOne)

module.exports = route;
