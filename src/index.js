const express = require("express");
const cors = require("cors");
const { connectDB } = require("./connectdb");
const { Product } = require("./models/product");
const { list } = require("./routes/products/list");
const { get } = require("./routes/products/get");
const { post } = require("./routes/products/post");

connectDB()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/health", (req, res) => {
      res.status(200).json({
        hello: "world",
      });
    });

    app.get("/products", list);
    app.post("/products", post);
    app.get("/products/:uuid", get);

    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://0.0.0.0:${process.env.PORT}...`);
    });
  })
  .catch((error) => console.error(error));
