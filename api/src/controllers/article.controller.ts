import Article from "../models/article.model";

class ArticleController {
  static readAll = (req, res) => {
    Article.find((err, articles) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(articles);
    });
  };
  static create = (req, res) => {
    const article = new Article();

    article.title = req.body.title ? req.body.title : article.title;
    article.subtitle = req.body.subtitle;
    article.header_picture = req.body.header_picture;
    article.footer_pictures = req.body.footer_pictures;
    article.author = req.body.author;
    article.date = req.body.date;
    article.content = req.body.content;
    article.sources = req.body.sources;

    article.save((err) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      } else
        res.json({
          status: "success",
          message: "New article created!",
          data: article,
        });
    });
  };
  static read = (req, res) => {
    Article.findById(req.params.article_id, (err, article) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(article);
    });
  };
  static update = (req, res) => {
    Article.findById(req.params.article_id, (err, article) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }

      article.title = req.body.title ? req.body.title : article.title;
      article.subtitle = req.body.subtitle;
      article.header_picture = req.body.header_picture;
      article.footer_pictures = req.body.footer_pictures;
      article.author = req.body.author;
      article.date = req.body.date;
      article.content = req.body.content;
      article.sources = req.body.sources;

      article.save((err2) => {
        if (err2) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          message: "Article Info updated",
          data: article,
        });
      });
    });
  };
  static delete = (req, res) => {
    Article.deleteOne(
      {
        _id: req.params.article_id,
      },
      (err) => {
        if (err) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          status: "success",
          message: "Article deleted",
        });
      }
    );
  };
}

export default ArticleController;
