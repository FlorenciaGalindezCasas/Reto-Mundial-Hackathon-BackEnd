const router = require('express').Router();
const auth = require("../middleware/auth");
const { postUser } = require('../controllers/users')

router.post("/", auth, postUser);

module.exports = router;
