const { Product } = require("../../models/product");
const { request, response } = require("express");
const { cleanProduct } = require("../../utils/cleanProduct");
const logger = require("pino")();

/**
 * @param {request} req
 * @param {response} res
 */
module.exports.get = async (req, res) => {
  const { uuid } = req.params;

  try {
    const product = await Product.findById(uuid);

    if (!product) {
      logger
        .child({ ip: req.ip, requested_product_id: uuid, error: err })
        .error("product not found");
      return res.status(404).send("product not found");
    }

    const cleanedProduct = cleanProduct(product);

    res.status(200).json(cleanedProduct);
  } catch (err) {
    logger
      .child({ ip: req.ip, requested_product_id: uuid, error: err })
      .error("error serving product");
    res.status(500).send("error serving product");
  }
};
