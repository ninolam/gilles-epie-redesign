import express from "express";

import setSocialRoute from "../routes/social.route";
import setRecipeRoute from "../routes/recipes.route";
import setRestaurantRoute from "../routes/restaurants.route";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Routes: /recipes, recipes/:id",
  });
});

setSocialRoute(router);
setRecipeRoute(router);
setRestaurantRoute(router);

router.route("/check").get((req, res) => {
  res.json({
    status: "success",
    message: "I'm alive",
  });
});

export default router;
