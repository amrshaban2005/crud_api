const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoute = require("./src/routes/product.route");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", productRoute);

// serving static files
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "pos",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongdb is connected");
  });

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
