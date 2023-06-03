const db = require("../models");
const Recipe = db.Recipe;

// Task 2: Continues here: Implement get all recipes function
const getAllRecipes = async (req, res) => {
  let recipes;
  try {
    recipes = await Recipe.find({});
    return res.status(200).json(recipes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// Task 2: Continues below to module.exports

// Task 3: Continues here: Implement get recipe by id function
const getRecipeById = async (req, res) => {
  let recipe;
  try {
    recipe = await Recipe.findById(req.params.id);
    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// Task 3: Continues below to module.exports

// Task 4: Continues here: Implement create a recipe function
const createRecipe = async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    email: req.body.email,
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  try {
    await recipe.save();
    return res.status(201).json({ message: `Created a new recipe!` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// Task 4: Continues below to module.exports

// Task 5: Continues here: Implement delete recipe by id function

// Task 5: Continues below to module.exports

// Task 6: Continues here: Implement update recipe by id function

// Task 6: Continues below to module.exports

module.exports = {
  // Task 2: Continues here: Add the get all recipes function
  getAllRecipes,
  // Task 2: Ends here
  // Task 3: Continues here: Add the get recipe by id function
  getRecipeById,
  // Task 3: Ends here
  // Task 4: Continues here: Add the create a recipe function
  //
  // Task 4: Ends here
  // Task 5: Continues here: Add the delete a recipe by id function
  //
  // Task 5: Ends here
  // Task 6: Continues here: Add the update a recipe by id function
  //
  // Task 6: Ends here
};
