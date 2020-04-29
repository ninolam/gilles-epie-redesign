import express from "express";

import setSocialsRoute from "../routes/social.route";
import setRecipesRoute from "../routes/recipes.route";
import setRestauranstRoute from "../routes/restaurants.route";
import setArticlesRoute from "../routes/articles.route";
import setInfosRoute from "../routes/infos.route";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Routes: /recipes, recipes/:id",
  });
});

setSocialsRoute(router);
setRecipesRoute(router);
setRestauranstRoute(router);
setArticlesRoute(router);
setInfosRoute(router);

router.route("/check").get((req, res) => {
  res.json({
    message: "I'm alive",
  });
});

export default router;
