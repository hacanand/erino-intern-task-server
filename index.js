const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./dbconnect');
const routes = require("./src/routes/index");
const dotenv = require('dotenv')
dotenv.config(); 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.send('hello world')
});
app.use("/api", routes);
app.listen(() => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectDB();
});

