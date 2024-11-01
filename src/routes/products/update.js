const { Product } = require("../../models/product");
const { request, response } = require("express");
const logger = require("pino")();

/**
 * @param {request} req
 * @param {response} res
 */
module.exports.update = async (req, res) => {
  try {
    const data = req.body;

    if (!data) {
      logger.child({ ip: req.ip }).error("update data not provided");
      return res.status(400).send("updates not provided");
    }

    if (!data.ID) {
      logger.child({ ip: req.ip, data }).error("id not provided");
      return res.status(400).send("id not provided");
    }

    data["_id"] = data.ID;
    delete data.ID;

    await Product.findByIdAndUpdate(data.ID, data);
  } catch (err) {
    logger.child({ ip: req.ip, error: err }).error("error creating product");

    res.status(500).send("error creating product");
  }
};
