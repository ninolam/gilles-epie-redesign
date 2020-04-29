import infoController from "../controllers/info.controller";

const setInfosRoute = (router) => {
  router
    .route("/infos")
    .get(infoController.readAll)
    .post(infoController.create);

  router
    .route("/infos/:info_id")
    .get(infoController.read)
    .patch(infoController.update)
    .put(infoController.update)
    .delete(infoController.delete);
};

export default setInfosRoute;
