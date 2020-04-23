const express = require("express");
const assert = require("assert");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();

const app = express();

const Recipe = require("./models/recipeModel");
const apiRoutes = require("./api-routes");
const data = require("../../data/recipes.json");

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// connection to database
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log(
      `${chalk.green("[index.js]")} DB (${chalk.blue(
        res.connections[0].name
      )}) connected`
    );
  })
  .catch((err) => {
    console.log(err.message);
  });

// Recipe.collection.insertMany([data], function (err, r) {
//   assert.equal(null, err);
//   assert.equal(1, r.insertedCount);
// });

// Send message for default URL
app.get("/", (req, res) => {
  res.send("Hi ! add '/api' in the URL to get the API content.");
});

// Use Api routes in the App
app.use("/api", apiRoutes);

// Setup server port
const port = process.env.PORT || process.env.MONGO_PORT;

// Launch app to listen to specified port
app.listen(port, () => {
  console.log(
    `${chalk.green("[index.js]")} Running API on port ${chalk.blue(port)}`
  );
});
