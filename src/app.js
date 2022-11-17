const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3001);

app.get('/', require('./routes/index.routes'));

app.use(async (error, req, res, next) => {

    // const userdata = req.userdata;
    // if (decoded) await errorMail(userdata.email, message)
    
    const { status, message } = error;
    res.status(status || 500).send({ message })

})

module.exports = app;
