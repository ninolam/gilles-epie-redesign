// Import recipe model
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
// Handle create recipe actions
exports.create = function (req, res) {
  var recipe = new Recipe();
  recipe.name = req.body.name ? req.body.name : recipe.name;
  recipe.type = req.body.type;
  recipe.number_of_persons = req.body.number_of_persons;
  recipe.ingredients = req.body.ingredients;
  recipe.preparation = req.body.preparation;
  // save the recipe and check for errors
  recipe.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New recipe created!",
      data: recipe,
    });
  });
};
// Handle view recipe info
exports.read = function (req, res) {
  Recipe.findById(req.params.recipe_id, function (err, recipe) {
    if (err) res.send(err);
    res.json({
      message: "Recipe details loading..",
      data: recipe,
    });
  });
};
// Handle update recipe info
exports.update = function (req, res) {
  recipe.findById(req.params.recipe_id, function (err, recipe) {
    if (err) res.send(err);
    recipe.name = req.body.name ? req.body.name : recipe.name;
    recipe.gender = req.body.gender;
    recipe.email = req.body.email;
    recipe.phone = req.body.phone;
    // save the recipe and check for errors
    recipe.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Recipe Info updated",
        data: recipe,
      });
    });
  });
};
// Handle delete recipe
exports.delete = function (req, res) {
  Recipe.remove(
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
