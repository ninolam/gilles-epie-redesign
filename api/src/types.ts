import { Document } from "mongoose"

export interface IRecipe extends Document {
  title: string;
  picture_url: string;
  type: string;
  number_of_persons: number;
  ingredients: string[];
  ustensils: string[]
  preparation: string;
  dressing: string;
  cooking: string;
}