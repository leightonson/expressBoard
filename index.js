const express = require('express');
const app = express();
const route = require('./routes');
const sequelize = require('./models').sequelize;

sequelize.sync();


app.use(express.json());


app.use('/', route)


app.listen(3000, () => {
    console.log('server is running on 3000 port');
});
