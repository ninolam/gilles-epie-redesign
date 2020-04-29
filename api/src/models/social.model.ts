import mongoose, { Schema } from "mongoose";
import { ISocial } from "../types";

const socialSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ISocial>("Social", socialSchema);
