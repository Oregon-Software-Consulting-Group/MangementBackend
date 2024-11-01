const { Product } = require("../../models/product");
const { request, response } = require("express");
const logger = require("pino")();

/**
 * @param {request} req
 * @param {response} res
 */
module.exports.post = async (req, res) => {
  try {
    const data = req.body;

    const product = new Product(data);

    await product.save();
  } catch (err) {
    logger.child({ ip: req.ip, error: err }).error("error creating product");

    res.status(500).send("error creating product");
  }
};
