var mongoose = require("mongoose");

var recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  picture_url: {
    type: String,
    required: true,
  },
  type: String,
  number_of_persons: Number,
  ingredients: {
    type: [String],
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
  cooking: String,
});

var Recipe = (module.exports = mongoose.model("recipe", recipeSchema));

module.exports.get = function (callback, limit) {
  Recipe.find(callback).limit(limit);
};
