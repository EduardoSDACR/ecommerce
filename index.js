const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userAuth = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Success"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", userAuth);
app.use("/api/users", userRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
