const router = require("express").Router();

router.use("/users", require("./user.route"));

module.exports = router;
