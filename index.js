const express = require('express');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const app = express();
const route = require('./routes');
const sequelize = require('./models').sequelize;
// sequelize.sync({force:true});
sequelize.sync();
app.use(methodOverride());
app.use(cookieParser());

app.use(express.json());


app.use('/', route)


app.listen(3000, () => {
    console.log('server is running on 3000 port');
});


