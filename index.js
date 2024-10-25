const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const { MONGODB_URL } = process.env;

if (!MONGODB_URL) {
  console.error(
    "No MONGODB_URL environment variable has been defined in config.env"
  );
  process.exit(1);
}

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

    app.post("/products/post", (req, res) => {});

    app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    });
  })
  .catch((error) => console.error(error));
