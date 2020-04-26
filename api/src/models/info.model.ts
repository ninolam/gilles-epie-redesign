import mongoose, { Schema } from "mongoose";
import { IInfo } from "../types";

const infoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  portraits_urls: {
    type: [String],
    required: true,
  },
});

export default mongoose.model<IInfo>("Info", infoSchema);
