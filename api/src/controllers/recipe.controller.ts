import Recipe from "../models/recipe.model";

class RecipeController {
  static readAll = (req, res) => {
    Recipe.find((err, recipes) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(recipes);
    });
  };
  static create = (req, res) => {
    const recipe = new Recipe();

    recipe.title = req.body.title ? req.body.title : recipe.title;
    recipe.picture_url = req.body.picture_url;
    recipe.type = req.body.type;
    recipe.date = req.body.date;
    recipe.number_of_persons = req.body.number_of_persons;
    recipe.ingredients = req.body.ingredients;
    recipe.ustensils = req.body.ustensils;
    recipe.preparation = req.body.preparation;
    recipe.dressing = req.body.dressing;
    recipe.cooking = req.body.cooking;

    recipe.save((err) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      } else
        res.json({
          status: "success",
          message: "New recipe created!",
          data: recipe,
        });
    });
  };
  static read = (req, res) => {
    Recipe.findById(req.params.recipe_id, (err, recipe) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(recipe);
    });
  };
  static update = (req, res) => {
    Recipe.findById(req.params.recipe_id, (err, recipe) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }

      recipe.title = req.body.title ? req.body.title : recipe.title;
      recipe.picture_url = req.body.picture_url;
      recipe.type = req.body.type;
      recipe.date = req.body.date;
      recipe.number_of_persons = req.body.number_of_persons;
      recipe.ingredients = req.body.ingredients;
      recipe.preparation = req.body.preparation;
      recipe.dressing = req.body.dressing;
      recipe.cooking = req.body.cooking;

      recipe.save((err2) => {
        if (err2) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          message: "Recipe Info updated",
          data: recipe,
        });
      });
    });
  };
  static delete = (req, res) => {
    Recipe.deleteOne(
      {
        _id: req.params.recipe_id,
      },
      (err) => {
        if (err) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          status: "success",
          message: "Recipe deleted",
        });
      }
    );
  };
}

export default RecipeController;
