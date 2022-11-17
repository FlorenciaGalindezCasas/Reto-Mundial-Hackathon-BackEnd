const router = require('express').Router();
const auth = require('../middleware/auth');

router.get('/', (req, res) => res.send('Hello world!'));

router.use('/user', auth, require('./user.routes'));

module.exports = router;
