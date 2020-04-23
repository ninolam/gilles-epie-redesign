let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
require("dotenv").config();

let app = express();

let apiRoutes = require("./api-routes");

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
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

// Send message for default URL
app.get("/", (req, res) => {
  res.send("Hello World ! add '/api' in the URL to get the API content.");
});

// Use Api routes in the App
app.use("/api", apiRoutes);

// Setup server port
var port = process.env.PORT || process.env.MONGO_PORT;

// Launch app to listen to specified port
app.listen(port, () => {
  console.log("Running API on port " + port);
});
