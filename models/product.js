const { Schema, model } = require("mongoose");

const productSchema = Schema({
  StockID: String,
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
          Details: {
            BluetoothVersion: String,
            BatteryLifeHours: Number,
            WarrantyMonths: Number,
          },
        },
        {
          SubcategoryName: String,
          Details: {
            CompatibleDevices: [String],
            WeightGrams: Number,
          },
        },
      ],
    },
  ],
});

const Product = model("Product", productSchema);

module.exports = {
  Product,
};
