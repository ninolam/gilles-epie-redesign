var mongoose = require("mongoose");

// Setup schema
var recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  number_of_persons: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
});

// Export Recipe model
var Recipe = (module.exports = mongoose.model("recipe", recipeSchema));

module.exports.get = function (callback, limit) {
  Recipe.find(callback).limit(limit);
};
