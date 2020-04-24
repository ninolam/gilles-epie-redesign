import mongoose, { Schema } from "mongoose";
import { IRecipe } from "../types";

const recipeSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
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
  ustensils: {
    type: [String],
  },
  preparation: {
    type: String,
    required: true,
  },
  dressing: String,
  cooking: String,
});

export default mongoose.model<IRecipe>("Recipe", recipeSchema);
