const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");
const app = express();
require("dotenv").config();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://ajayakay1:ajayakay1@cluster0.ipahyza.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/v1", router);

const server = app.listen(5000, () => console.log(`Server started on ${5000}`));
