const express = require("express");
const route = express.Router();
const authController = require('../controllers/auth')


//회원가입 api 경로
route.post("/join", authController.join)

//로그인 api 경로
route.post("/login", authController.login)

//조회 api 경로
route.post("/duplicateCheck", authController.duplicateCheck)

module.exports = route;
