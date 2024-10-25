const express = require("express");
const cors = require("cors");
const { connectDB } = require("./connectdb")
const { Product } = require("./models/product")

connectDB().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/health", (req, res) => {
      res.status(200).json({
        hello: "world",
      });
    });

    app.get("/products", (req, res) => {
      Product.find()
        .then(products => {
          res.json(products)
        })
        .catch(err => {
          console.error('Error retrieving products:', err);
          res.status(500).send('Server error');
        })
    
    })

    app.get("/products/:uuid", (req, res) => {
      const { uuid } = req.params;

      Product.findById(uuid)
        .then(product => {
          if (!product) {
            return res.status(404).send('Product not found');
          }
          res.json(product);
        })
        .catch(err => {
          console.error('Error retrieving product:', err);
          res.status(500).send('Server error');
        });
    })
  
    app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    });
  })
  .catch((error) => console.error(error));
