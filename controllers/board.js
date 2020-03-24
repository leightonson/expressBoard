const model = require('../models')

const writeOne = async (req, res, next) => {
    try{
        const title = req.body.title;
        const content = req.body.content;
        const imgUrl = req.body.imgUrl;
        const author = req.findUserId;
        const createBoard = await model.Board.create({title, content, imgUrl, author});
        // const {title:title, contents, password} = req.body;
        res.json({"result": createBoard});
    }
    catch(err){
        console.log(err)
        res.json({"result":'실패했습니다'});
    }
}

//리스트 글번호 제목 createdAt author
const readAll = async (req, res, next) => {
    try {
        const getBoard = await model.Board.findAll({
            attributes: ['id', 'title', 'createdAt', 'author']
        });
        res.json({"result": getBoard});
    }
    catch (err) {

    }
}

//글 하나에대한 전부다
const readOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id)
        const getBoard = await model.Board.findOne({
            where: {id},
        })
        res.json({"result": getBoard});
    }
    catch (err) {

    }
}

//글 하나에대한 전부다
const deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id)
        const deleteBoard = await model.Board.destroy({
            where : {id},
          })
          
        res.json({"result": deleteBoard});
    }
    catch (err) {

    }
}

module.exports = {
    writeOne, readAll, readOne,deleteOne
}

