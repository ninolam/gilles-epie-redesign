import socialController from "../controllers/social.controller";

const setSocialRoute = (router) => {
  router
    .route("/socials")
    .get(socialController.readAll)
    .post(socialController.create);

  router
    .route("/socials/:social_id")
    .get(socialController.read)
    .patch(socialController.update)
    .put(socialController.update)
    .delete(socialController.delete);
};

export default setSocialRoute;
