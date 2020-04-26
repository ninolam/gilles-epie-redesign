import { Document } from "mongoose";
import { StringifyOptions } from "querystring";

export interface IRecipe extends Document {
  title: string;
  date: string;
  picture_url: string;
  type: string;
  number_of_persons: number;
  ingredients: string[];
  ustensils: string[];
  preparation: string;
  dressing: string;
  cooking: string;
}

export interface IRestaurant extends Document {
  title: string;
  subtitle: string;
  header_pictures: string[];
  footer_pictures: string[];
  description: string;
  resume: string;
  name: string;
  adress: string;
  zipcode: number;
  city: string;
  country: string;
  phone: string;
  fax: string;
  website: string;
  schedules: string;
}

export interface IArticle extends Document {
  title: string;
  subtitle: string;
  header_picture: string;
  footer_pictures: string[];
  author: string;
  date: string;
  content: string;
  sources: string[];
}

export interface ISocial extends Document {
  name: string;
  label: string;
  url: string;
}

export interface IInfo extends Document {
  name: string;
  bio: string;
}
