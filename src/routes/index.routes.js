const router = require("express").Router();

router.get("/", (req, res) => {
    res.send(`
    <br/><br/><br/>
    <center><h4>Server running ok</h4></center>
    `);
});

router.use("/user", require('./user.routes')); 

router.use("/api", require("./api.routes"));

module.exports = router;
