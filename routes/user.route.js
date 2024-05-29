const router = require("express").Router();
const user = require("../controller/user.controller");

router.post("/register", user.signUp);
router.post("/login", user.signIn);

module.exports = router;
