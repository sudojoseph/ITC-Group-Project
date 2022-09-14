const express = require("express");
const threadController = require("../controllers/threadController");
const {
  uploadAudio,
  uploadAudioToCloudinary,
  audioUrl,
} = require("../middleware/fileMiddleware");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { auth } = require("../middleware/userMiddleware");

const router = express.Router();

/// need to add auth
router
  .route("/")
  .post(
    uploadAudio.single("audioFile"),
    audioUrl,
    uploadAudioToCloudinary,
    threadController.addThread
  );

router.get("/:userId", threadController.getThreadsByUserId);

module.exports = router;
