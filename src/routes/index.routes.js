const router = require("express").Router();
const auth = require("../middleware/auth");

router.get("/", (req, res) => res.send("Hello world!"));

router.use("/user", auth, require("./user.routes"));

router.use("/api", auth, require("./api.routes"));

module.exports = router;
