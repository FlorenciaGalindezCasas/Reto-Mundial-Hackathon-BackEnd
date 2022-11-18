const router = require('express').Router();
const auth = require("../middleware/auth");
const { postUser, updateUser } = require('../controllers/users')

router.post("/", auth, postUser);

router.put("/", auth, updateUser)

module.exports = router;
