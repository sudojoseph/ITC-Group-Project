const bcrypt = require('bcrypt');
const { getUserByEmailModel } = require("../models/usersmodel");
const jwt = require("jsonwebtoken");
require("dotenv").config();


async function auth(req, res, next) {
    const { token } = req.cookies;
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized");
        return;
      }
      if (decoded) {
        req.body.userId = decoded.id;
        next();
        return;
      }
    });
  }

async function isExistingUser(req, res, next) {
    const user = await getUserByEmailModel(req.body.email);
    console.log("get email======== ",user)
    if (user) {
      req.body.user = user;
      next();
      return;
    }
    res.status(400).send("User with this email does not exist");

};

async function verifyPwd(req, res, next) {
    const { user } = req.body;
    console.log("verify pwd ====================", user)
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        const err = new Error(err);
        err.statusCode = 500;
        console.log('validation',err)
        next(err);
        return;
      }
      if (result) {
        console.log(' password done ')
        next();
        return;
      } else {
        res.status(400).send("Incorrrect Password!");
      }
    });
  }


  function hashPwd(req, res, next) {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      req.body.password = hash;
      next();
    });
};


module.exports = {isExistingUser, verifyPwd, auth, hashPwd};