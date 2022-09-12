const express = require("express");
const threadController = require("../controllers/threadController")

const router = express.Router();


router.route("/thread").post(threadController.addThread)
