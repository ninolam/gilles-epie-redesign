// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});

var recipeController = require("./controllers/recipeController");
// recipe routes
router
  .route("/recipes")
  .get(recipeController.index)
  .post(recipeController.create);

router
  .route("/recipes/:recipe_id")
  .get(recipeController.read)
  .patch(recipeController.update)
  .put(recipeController.update)
  .delete(recipeController.delete);
// Export API routes
module.exports = router;
