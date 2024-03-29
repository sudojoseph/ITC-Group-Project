const express = require("express");
const router = express.Router();
const { addUserController, login, logout} = require("../controllers/userControllers");
const { isExistingUser, verifyPwd, hashPwd  } = require("../middleware/userMiddleware");



router.post("/signup", hashPwd, addUserController);

router.post("/login", isExistingUser, verifyPwd, login)

router.get("/logout", logout)

module.exports = router;