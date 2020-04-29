import articleController from "../controllers/article.controller";

const setArticlesRoute = (router) => {
  router
    .route("/articles")
    .get(articleController.readAll)
    .post(articleController.create);

  router
    .route("/articles/:article_id")
    .get(articleController.read)
    .patch(articleController.update)
    .put(articleController.update)
    .delete(articleController.delete);
};

export default setArticlesRoute;
