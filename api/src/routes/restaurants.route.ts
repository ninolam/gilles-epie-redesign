import restaurantController from "../controllers/restaurant.controller";

const setRestaurantsRoute = (router) => {
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
};

export default setRestaurantsRoute;
