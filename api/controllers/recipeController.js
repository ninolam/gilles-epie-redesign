// contactController.js
// Import contact model
Recipe = require("../models/recipeModel");
// Handle index actions
exports.index = function (req, res) {
  Recipe.get(function (err, recipes) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Recipes retrieved successfully",
      data: recipes,
    });
  });
};
// Handle create contact actions
exports.new = function (req, res) {
  var recipe = new Recipe();
  recipe.title = req.body.title ? req.body.title : recipe.title;
  recipe.picture_url = req.body.picture_url;
  recipe.type = req.body.type;
  recipe.number_of_persons = req.body.number_of_persons;
  recipe.ingredients = req.body.ingredients;
  recipe.preparation = req.body.preparation;
  recipe.cooking = req.body.cooking;
  // save the contact and check for errors
  recipe.save(function (err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message: "New recipe created!",
        data: recipe,
      });
  });
};
// Handle view contact info
exports.view = function (req, res) {
  Recipe.findById(req.params.recipe_id, function (err, contact) {
    if (err) res.send(err);
    res.json({
      message: "Contact details loading..",
      data: recipe,
    });
  });
};
// Handle update contact info
exports.update = function (req, res) {
  Recipe.findById(req.params.recipe_id, function (err, recipe) {
    if (err) res.send(err);
    recipe.title = req.body.title ? req.body.title : recipe.title;
    recipe.picture_url = req.body.picture_url;
    recipe.type = req.body.type;
    recipe.number_of_persons = req.body.number_of_persons;
    recipe.ingredients = req.body.ingredients;
    recipe.preparation = req.body.preparation;
    recipe.cooking = req.body.cooking;
    // save the contact and check for errors
    recipe.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Recipe Info updated",
        data: recipe,
      });
    });
  });
};
// Handle delete contact
exports.delete = function (req, res) {
  Recipe.deleteOne(
    {
      _id: req.params.recipe_id,
    },
    function (err, recipe) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Recipe deleted",
      });
    }
  );
};
