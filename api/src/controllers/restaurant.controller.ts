import Restaurant from "../models/restaurant.model";

class RestaurantController {
  static readAll = (req, res) => {
    Restaurant.find((err, restaurants) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(restaurants);
    });
  };
  static create = (req, res) => {
    const restaurant = new Restaurant();

    restaurant.title = req.body.title ? req.body.title : restaurant.title;
    restaurant.subtitle = req.body.subtitle;
    restaurant.header_pictures = req.body.header_pictures;
    restaurant.footer_pictures = req.body.footer_pictures;
    restaurant.description = req.body.description;
    restaurant.name = req.body.name;
    restaurant.adress = req.body.adress;
    restaurant.zipcode = req.body.zipcode;
    restaurant.city = req.body.city;
    restaurant.country = req.body.country;
    restaurant.phone = req.body.phone;
    restaurant.website = req.body.website;
    restaurant.schedules = req.body.schedules;

    restaurant.save((err) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      } else
        res.json({
          status: "success",
          message: "New restaurant created!",
          data: restaurant,
        });
    });
  };
  static read = (req, res) => {
    Restaurant.findById(req.params.restaurant_id, (err, restaurant) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.send(restaurant);
    });
  };
  static update = (req, res) => {
    Restaurant.findById(req.params.restaurant_id, (err, restaurant) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }

      restaurant.title = req.body.title ? req.body.title : restaurant.title;
      restaurant.subtitle = req.body.subtitle;
      restaurant.header_pictures = req.body.header_pictures;
      restaurant.footer_pictures = req.body.footer_pictures;
      restaurant.description = req.body.description;
      restaurant.name = req.body.name;
      restaurant.adress = req.body.adress;
      restaurant.zipcode = req.body.zipcode;
      restaurant.city = req.body.city;
      restaurant.country = req.body.country;
      restaurant.phone = req.body.phone;
      restaurant.website = req.body.website;
      restaurant.schedules = req.body.schedules;

      restaurant.save((err2) => {
        if (err2) {
          res.json({
            status: "error",
            message: err,
          });
        }
        res.json({
          message: "Restaurant Info updated",
          data: restaurant,
        });
      });
    });
  };
  static delete = (req, res) => {
    Restaurant.deleteOne(
      {
        _id: req.params.restaurant_id,
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
          message: "Restaurant deleted",
        });
      }
    );
  };
}

export default RestaurantController;
