const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const http = require("http");

dotenv.config();
PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

const db = require("./models");
MONGO_DB = process.env.MONGO_DB || "mongodb://localhost:27017/recipes";
db.mongoose
  .connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    // Task 1: Continues here: Initialize DB after the schema is defined
    initializeDB();
    // Task 1: Ends here
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB.", err);
    process.exit();
  });

const initializeDB = async () => {
  try {
    const recipes = await db.Recipe.find();
    if (recipes.length === 0) {
      const data = require("../public/data/recipes.json");
      await db.Recipe.insertMany(data);
      console.log("Successfully initialized DB.");
    }
  } catch (err) {
    console.error("Error initializing DB.", err);
  }
};

// Routes
const apiPrefix = "/api";
app.use(apiPrefix, require("./routes/recipe.routes"));
app.use(apiPrefix, require("./routes/user.routes"));

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
