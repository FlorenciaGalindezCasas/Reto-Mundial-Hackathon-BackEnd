const router = require('express').Router();
const { postUser, updateUser } = require('../controllers/users')

router.post("/", postUser);

router.put("/", updateUser)

module.exports = router;
