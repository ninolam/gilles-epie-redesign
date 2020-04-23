import express from "express";
import assert from "assert";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

import apiRoutes from "./router";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

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

// Recipe.collection.insertMany([data], function (err, r) {
//   assert.equal(null, err);
//   assert.equal(1, r.insertedCount);
// });

app.get("/", (req, res) => {
  res.send("Hi ! add '/api' in the URL to get the API content.");
});

// Use Api routes in the App
app.use("/api", apiRoutes);

// Setup server port
const port = process.env.PORT || process.env.MONGO_PORT;

// Launch app to listen to specified port
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(
    `${chalk.green("[index.js]")} Running API on port ${chalk.blue(port)}`
  );
});
