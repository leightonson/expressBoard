const express = require("express");
const route = express.Router();


//회원가입 api 경로
route.post("/join", (req,res)=>{
    res.json({"result":'가입완료'});
})

//로그인 api 경로
route.post("/login", (req,res)=>{
    res.json({"result":req.body.title});
})

//조회 api 경로
route.get("/", (req,res)=>{   
    res.json({"result":req.body.title});
})

module.exports = route;
