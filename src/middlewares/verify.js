const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

JWT_TOKEN = process.env.JWT_SECRET || "secret";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ error: "Access token not found" });
  }

  // Task 7: Starts here: Implement the JWT verification

  // Task 7: Continues to src\controllers\recipe.controller.js
};

module.exports = { authenticateToken };
