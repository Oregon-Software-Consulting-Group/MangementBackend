const { Product } = require("../../models/product");
const { request, response } = require("express");
const logger = require("pino")();

/**
 * @param {request} req
 * @param {response} res
 */
module.exports.delete = async (req, res) => {
  const { uuid } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send("product not found");
    }

    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (err) {
    logger
      .child({ ip: req.ip, requested_product_id: uuid, error: err })
      .error("error serving product");
    res.status(500).send("error serving product");
  }
};
