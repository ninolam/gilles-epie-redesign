import Social from "../models/social.model";

class SocialController {
  static readAll = (req, res) => {
    Social.find((err, socials) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(socials);
    });
  };
  static create = (req, res) => {
    const social = new Social();

    social.name = req.body.name ? req.body.name : social.name;
    social.label = req.body.label;
    social.url = req.body.url;

    social.save((err) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      } else
        res.json({
          status: "success",
          message: "New social created!",
          data: social,
        });
    });
  };
  static read = (req, res) => {
    Social.findById(req.params.social_id, (err, social) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(social);
    });
  };
  static update = (req, res) => {
    Social.findById(req.params.social_id, (err, social) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }

      social.name = req.body.name ? req.body.name : social.name;
      social.label = req.body.label;
      social.url = req.body.url;

      social.save((err2) => {
        if (err2) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          message: "Social Info updated",
          data: social,
        });
      });
    });
  };
  static delete = (req, res) => {
    Social.deleteOne(
      {
        _id: req.params.social_id,
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
          message: "Social deleted",
        });
      }
    );
  };
}

export default SocialController;
