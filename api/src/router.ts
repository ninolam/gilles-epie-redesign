import express from "express";
import recipeController from "./controllers/recipe.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Routes: /recipes, recipes/:id",
  });
});

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

export default router;
