const express = require("express");

const bodyParser = require("body-parser");
const connectDB = require("./dbconnect");
const routes = require("./src/routes/index");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);

const PORT = process.env.PORT;


app.get("/", (_, res) => {
  // res.status(200);
  res.send("Welcome to root URL of Server");
});
app.use("/api", routes);
app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
    connectDB();
  } else console.log("Error occurred, server can't start", error);
});
