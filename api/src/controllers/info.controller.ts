import Info from "../models/info.model";

class InfosController {
  static readAll = (req, res) => {
    Info.find((err, infos) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(infos);
    });
  };
  static create = (req, res) => {
    const info = new Info();

    info.name = req.body.name ? req.body.name : info.name;
    info.bio = req.body.bio;
    info.picture = req.body.picture;
    info.portraits_url = req.body.portraits_url;
    info.mentors = req.body.mentors;
    info.fun_facts = req.body.fun_facts;

    info.save((err) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      } else
        res.json({
          status: "success",
          message: "New info created!",
          data: info,
        });
    });
  };
  static read = (req, res) => {
    Info.findById(req.params.info_id, (err, info) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(info);
    });
  };
  static update = (req, res) => {
    Info.findById(req.params.info_id, (err, info) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }

      info.name = req.body.name ? req.body.name : info.name;
      info.bio = req.body.bio;
      info.picture = req.body.picture;

      info.portraits_url = req.body.portraits_url;
      info.mentors = req.body.mentors;
      info.fun_facts = req.body.fun_facts;

      info.save((err2) => {
        if (err2) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          message: "Info Info updated",
          data: info,
        });
      });
    });
  };
  static delete = (req, res) => {
    Info.deleteOne(
      {
        _id: req.params.info_id,
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
          message: "Info deleted",
        });
      }
    );
  };
}

export default InfosController;
