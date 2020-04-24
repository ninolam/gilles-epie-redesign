import express from "express";
import recipeController from "../controllers/recipe.controller";
import restaurantController from "../controllers/restaurant.controller";

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

router
  .route("/restaurants")
  .get(restaurantController.readAll)
  .post(restaurantController.create);

router
  .route("/restaurants/:restaurant_id")
  .get(restaurantController.read)
  .patch(restaurantController.update)
  .put(restaurantController.update)
  .delete(restaurantController.delete);

router.route("/check").get((req, res) => {
  res.json({
    status: "success",
    message: "I'm alive",
  });
});

export default router;
