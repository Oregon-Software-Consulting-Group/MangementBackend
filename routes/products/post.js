const mongoose = require("mongoose");
const { Product } = require("../../model/product");
const { request, response } = require("express");

/**
 * @param {request} req
 * @param {response} res
 */
module.exports.post = async (req, res) => {
  const product = new Product({
    StockID: "1234",
    Product: {
      ProductID: "P001",
      ProductName: "Wireless Headphones",
      QuantityAvailable: 150,
      Stats: {
        ReorderLevel: 30,
        QuantityOnOrder: 50,
        CostPerUnit: 59.99,
        LastRestockedDate: "2024-10-01",
        ExpirationDate: null,
        StockStatus: "Available",
      },
    },
    Warehouse: {
      WarehouseID: "WH101",
      Region: "North America",
      Location: {
        Aisle: "A2",
        Bin: "B10",
      },
    },
    Supplier: {
      SupplierID: "S6789",
      SupplierName: "TechSupplies Inc.",
      Contact: {
        Phone: "+1-800-123-4567",
        Email: "support@techsupplies.com",
      },
    },
    Categories: [
      {
        CategoryName: "Electronics",
        Subcategories: [
          {
            SubcategoryName: "Audio",
            Details: {
              BluetoothVersion: "5.0",
              BatteryLifeHours: 20,
              WarrantyMonths: 12,
            },
          },
          {
            SubcategoryName: "Accessories",
            Details: {
              CompatibleDevices: ["Phones", "Laptops", "Tablets"],
              WeightGrams: 200,
            },
          },
        ],
      },
    ],
  });

  await product.save();
};
