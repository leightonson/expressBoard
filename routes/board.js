const express = require("express");
const route = express.Router();


//글쓰기 api 경로
route.post("/", (req,res)=>{
    res.json({"result":req.body.title});
})

//글읽기 api 경로
route.get("/", (req,res)=>{
    res.json({"result":req.body.title});
})

//글목록보기 api 경로
route.get("/list", (req,res)=>{
    res.json({"result":req.body.title});
})

module.exports = route;
