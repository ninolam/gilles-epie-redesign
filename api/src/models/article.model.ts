import mongoose, { Schema } from "mongoose";
import { IArticle } from "../types";

const articleSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  header_picture: {
    type: String,
    required: true,
  },
  footer_picture: [String],
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sources: [String],
});

export default mongoose.model<IArticle>("Article", articleSchema);
