const { Product } = require("../../models/product");
const { request, response } = require("express");
const logger = require("pino")();

/**
 * @param {request} req
 * @param {response} res
 */
module.exports.list = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    logger.child({ ip: req.ip, error: err }).error("error serving product");
    res.status(500).send("error serving product");
  }
};
