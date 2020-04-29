import recipeController from "../controllers/recipe.controller";

const setRecipesRoute = (router) => {
  router
    .route("/recipes")
    .get(recipeController.readAll)
    .post(recipeController.create);

  router
    .route("/recipes/:recipe_id")
    .get(recipeController.read)
    .patch(recipeController.update)
    .put(recipeController.update)
    .delete(recipeController.delete);
};

export default setRecipesRoute;
