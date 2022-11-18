const router = require('express').Router();
const auth = require("../middleware/auth");
const { signup, signin } = require('../controllers/users')

router.post("/signup", signup);

router.post("/signin", signin);

module.exports = router;
