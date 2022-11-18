const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/', require('./routes/index.routes'));

app.use(async (error, req, res, next) => {

    // const userdata = req.userdata;
    // if (decoded) await errorMail(userdata.email, message)
    
    const { status, message } = error;
    res.status(status || 500).send({ message })

})

module.exports = app;
