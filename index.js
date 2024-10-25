const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
(async () => {
  await mongoose.connect(MONGODB_URL);
})()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/health", (req, res) => {
      res.status(200).json({
        hello: "world",
      });
    });

    productsRouter = app.route("/products")

    productsRouter.get()
  
    app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    });
  })
  .catch((error) => console.error(error));
