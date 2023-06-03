const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../models");
const User = db.User;
dotenv.config();

const register = async (req, res, next) => {
  let user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  try {
    await user.save();
    return res
      .status(500)
      .send({ success: "User is successfully registered!" });
  } catch (err) {
    return res.status(500).send({ error: "Error saving user" });
  }
};

const login = async (req, res, next) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        error: "Invalid password",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });
    return res.status(200).send({
      id: user._id,
      username: user.username,
      accessToken: token,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { register, login };
