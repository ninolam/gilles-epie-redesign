import mongoose, { Schema } from "mongoose";
import { IRestaurant } from "../types";

const restaurantSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  header_pictures: {
    type: [String],
    required: true,
  },
  footer_pictures: [String],
  description: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  fax: String,
  website: String,
  schedules: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IRestaurant>("Restaurant", restaurantSchema);
