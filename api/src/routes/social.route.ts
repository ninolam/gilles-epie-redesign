import socialController from "../controllers/social.controller";

const setSocialsRoute = (router) => {
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

export default setSocialsRoute;
