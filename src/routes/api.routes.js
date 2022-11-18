const router = require("express").Router();
// const auth = require("../middleware/auth");
const { setVote, getStadistics } = require("../controllers/api");

router.get("/", /* auth, */ getStadistics);

router.post("/", /* auth, */ setVote);

module.exports = router;
