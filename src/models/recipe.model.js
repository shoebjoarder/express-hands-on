const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Recipe = new Schema({
  // Task 1: Starts here: Implement recipe schema
  name: {
    type: String,
    required: "This field is required.",
  },
  description: {
    type: String,
    required: "This field is required.",
  },
  email: {
    type: String,
    required: "This field is required.",
  },
  ingredients: {
    type: Array,
    required: "This field is required.",
  },
  category: {
    type: String,
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: "This field is required.",
  },
  // Task 1: Continues to app.js
});

module.exports = mongoose.model("recipe", Recipe);
