const { Product } = require("../models/product");

/**
 * @param {Product} p
 */
module.exports.cleanProduct = (product) => {
  try {
    product = product.toObject();

    product["ID"] = product._id;
    delete product._id;

    for (const category of product.Categories) {
      category["ID"] = category._id;
      delete category._id;

      for (const subcategory of category.Subcategories) {
        subcategory["ID"] = subcategory._id;
        delete subcategory._id;
      }
    }

    return product;
  } catch (err) {
    console.error(err);
  }
};
