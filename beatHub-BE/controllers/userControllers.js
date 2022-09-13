const {User} = require('../models/usersmodel');
const jwt = require("jsonwebtoken");
require("dotenv").config();



async function addUserController(req, res) {
    try {
      const { email, password, firstName, lastName} = req.body;
      const newUser = {
        email,
        password,
        firstName,
        lastName,
      };
      const addUserToDb = new User(newUser);
      addUserToDb.save();
      console.log(req.body);
      res.send(addUserToDb);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  
  function login(req, res) {
    try {
      const { user } = req.body;
      console.log("login", user)
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "2h" });
      
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production" ? true : false,
      });
      console.log(token)
      res.send({ user: {name :user.firstName, id: user._id, likedThreads: user.likedThreads, createdThreads: user.createdThreads,}, ok: true });
    } catch (err) {
      console.log(err);
    }
  }

  function logout(req, res) {
    try {
      if (req.cookies.token) {
        res.clearCookie("token");
        res.send({ ok: true });
      } else {
        throw new Error("No cookie to clear");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  module.exports = {addUserController, login, logout};