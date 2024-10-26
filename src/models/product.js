const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  Product: {
    ProductID: String,
    ProductName: String,
    QuantityAvailable: Number,
    Stats: {
      ReorderLevel: Number,
      QuantityOnOrder: Number,
      CostPerUnit: Number,
      LastRestockedDate: String,
      ExpirationDate: String,
      StockStatus: String,
    },
  },
  Warehouse: {
    WarehouseID: String,
    Region: String,
    Location: {
      Aisle: String,
      Bin: String,
    },
  },
  Supplier: {
    SupplierID: String,
    SupplierName: String,
    Contact: {
      Phone: String,
      Email: String,
    },
  },
  Categories: [
    {
      CategoryName: String,
      Subcategories: [
        {
          SubcategoryName: String,
          Details: Schema.Types.Mixed,
        },
      ],
    },
  ],
});

const Product = model("Product", productSchema);

module.exports = {
  Product,
};
