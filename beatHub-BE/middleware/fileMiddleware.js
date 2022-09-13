const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadImage = multer({ dest: "./images" });
const uploadAudio = multer({ dest: "./audio" });


cloudinary.config({
    cloud_name: "dlwgc0jjo",
    api_key: "848998189933443",
    api_secret: "TcMnNgDPruOZm30TkW7QLsgEyS4",
  });

const imageUrl = (req, res, next) => {
  try {
    if (req.file) {
      const imageUrl = "http://localhost:8080/" + req.file.path;
      req.body.imageUrl = imageUrl;
      next();
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send("Could not upload Image!");
  }
};


const audioUrl = (req, res, next) => {
    console.log("🚀 ~ file: fileMiddleware.js ~ line 31 ~ audioUrl ~ req", req.file)
    try {
      if (req.file) {
        const audioUrl = "http://localhost:8080/" + req.file.path;
        req.body.audioUrl = audioUrl;
        next();
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send("Could not upload file!");
    }
  };



const uploadImageToCloudinary = async (req, res, next) => {
  // if (!req.file) {
  //   // next();
  // } else {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
      if (err) {
        res.status(500).send("Could not upload Image to Cloudinary!");
        return;
      }
      if (result) {
        req.body.imageUrl = result.secure_url;
        fs.unlinkSync(req.file.path);

        next();
        return;
      }
    });
  // }
};


const uploadAudioToCloudinary = async (req, res, next) => {
    if (!req.file) {
      next();
    } else {
      cloudinary.uploader.upload(req.file.path, {resource_type: "raw"}, (err, result) => {
        if (err) {
          res.status(500).send("Could not upload file to Cloudinary!");
          return;
        }
        if (result) {
          req.body.audioFile = result.secure_url;
          fs.unlinkSync(req.file.path);
  
          next();
          return;
        }
      });
    }
  };

module.exports = { uploadImage, uploadAudio, imageUrl, uploadAudioToCloudinary, uploadImageToCloudinary, audioUrl };