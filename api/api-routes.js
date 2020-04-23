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
router.route("/recipes").get(recipeController.index).post(recipeController.new);

router
  .route("/recipes/:recipe_id")
  .get(recipeController.view)
  .patch(recipeController.update)
  .put(recipeController.update)
  .delete(recipeController.delete);

// Import contact controller
var contactController = require("./controllers/contactController");
// Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// Export API routes
module.exports = router;
