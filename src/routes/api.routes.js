const router = require("express").Router();
const { setVote, getStadistics } = require("../controllers/api");

router.get("/", getStadistics);

router.post("/", setVote);

module.exports = router;
