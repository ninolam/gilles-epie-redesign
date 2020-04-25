import express from "express";
import cors from "cors";
import chalk from "chalk";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import router from "./router.helper";
import insertExistingData from "../utils/insertExistingData.util";
import Social from "../models/social.model";
import socialsData from "../../../data/socials.json";
import Recipe from "../models/recipe.model";
import recipesData from "../../../data/recipes.json";
import Restaurant from "../models/restaurant.model";
import restaurantsData from "../../../data/restaurants.json";
import Article from "../models/article.model";
import articlesData from "../../../data/articles.json";
import Info from "../models/info.model";
import infosData from "../../../data/infos.json";

export default class Server {
  app: any;
  port: number;
  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || process.env.MONGO_PORT);
  }
  setupApp = () => {
    const app = this.app;
    app.use(cors());
    app.get("/", (req, res) => {
      res.send("Gilles Epié Redesign Server. add '/api' to access to the API");
    });

    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.json());
    app.use("/api", router);
  };
  setupDatabase = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then((res) => {
        // tslint:disable-next-line:no-console
        console.log(
          `${chalk.green("[index.js]")} DB (${chalk.blue(
            res.connections[0].name
          )}) connected`
        );
      })
      .catch((err) => {
        // tslint:disable-next-line:no-console
        console.log(err.message);
      });

    insertExistingData(socialsData, Social);
    insertExistingData(recipesData, Recipe);
    insertExistingData(restaurantsData, Restaurant);
    insertExistingData(articlesData, Article);
    insertExistingData(infosData, Info);
  };
  start = () => {
    this.setupApp();
    this.setupDatabase();
    this.app.listen(this.port, () => {
      // tslint:disable-next-line:no-console
      console.log(
        `${chalk.green("[index.js]")} Running API on port ${chalk.blue(
          this.port
        )}`
      );
    });
  };
}
