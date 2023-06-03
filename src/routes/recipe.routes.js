const express = require("express");
const recipeRouter = express.Router();
const recipeController = require("../controllers/recipe.controller");
const verify = require("../middlewares/verify");

// Task 2: Starts here: Implement get all recipes route
recipeRouter.get("/recipes", recipeController.getAllRecipes);
// Task 2: Continues to src\controllers\recipe.controller.js

// Task 3: Starts here: Implement get recipe by id route
recipeRouter.get("/recipes/:id", recipeController.getRecipeById);
// Task 3: Continues to src\controllers\recipe.controller.js

// Task 7: Continues here: Add the middleware to authenticate the token
// Task 4: Starts here: Implement create a recipe route
recipeRouter.post(
  "/recipes",
  verify.authenticateToken,
  recipeController.createRecipe
);
// Task 4: Continues to src\controllers\recipe.controller.js

// Task 7: Continues here: Add the middleware to authenticate the token
// Task 5: Starts here: Implement delete recipe by id route
recipeRouter.delete(
  "/recipes/:id",
  verify.authenticateToken,
  recipeController.deleteRecipeById
);
// Task 5: Continues to src\controllers\recipe.controller.js

// Task 7: Continues here: Add the middleware to authenticate the token
// Task 6: Starts here: Implement update recipe by id route
recipeRouter.put(
  "/recipes/:id",
  verify.authenticateToken,
  recipeController.updateRecipeById
);
// Task 6: Continues to src\controllers\recipe.controller.js
// Task 7: Ends here

module.exports = recipeRouter;
