const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./dbconnect');
const routes = require("./src/routes/index");
const dotenv = require('dotenv')
  dotenv.config();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use("/api", routes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});