const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.Recipe = require("./recipe.model.js");
db.User = require("./user.model.js");

module.exports = db;
