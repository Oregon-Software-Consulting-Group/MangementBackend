const faker = require("faker");

const { Product } = require("./models/product");
const { connectDB, disconnectDB } = require("./connectdb")

main().catch((err) => console.log(err));

async function main(numProducts=50) {
    console.log("Connecting to database...");
    await connectDB()
    const sampleProducts = Array.from({ length: numProducts }, createSampleProductData);
    
    await Product.insertMany(sampleProducts);
    console.log(`${numProducts} sample products inserted`);

    await disconnectDB();
    console.log("Database connection closed.");
}

function createSampleProductData() {
  return {
      StockID: faker.datatype.uuid(),
      Product: {
          ProductID: faker.datatype.uuid(),
          ProductName: faker.commerce.productName(),
          QuantityAvailable: faker.datatype.number({ min: 0, max: 100 }),
          Stats: {
              ReorderLevel: faker.datatype.number({ min: 5, max: 20 }),
              QuantityOnOrder: faker.datatype.number({ min: 0, max: 50 }),
              CostPerUnit: parseFloat(faker.commerce.price()),
              LastRestockedDate: faker.date.past().toISOString(),
              ExpirationDate: faker.date.future().toISOString(),
              StockStatus: faker.random.arrayElement(['In Stock', 'Out of Stock']),
          },
      },
      Warehouse: {
          WarehouseID: faker.datatype.uuid(),
          Region: faker.address.state(),
          Location: {
              Aisle: faker.random.alphaNumeric(2),
              Bin: faker.random.alphaNumeric(3),
          },
      },
      Supplier: {
          SupplierID: faker.datatype.uuid(),
          SupplierName: faker.company.companyName(),
          Contact: {
              Phone: faker.phone.phoneNumber(),
              Email: faker.internet.email(),
          },
      },
      Categories: Array.from({ length: faker.datatype.number({ min: 1, max: 3 }) }, () => ({
          CategoryName: faker.commerce.department(),
          Subcategories: [
              {
                  SubcategoryName: faker.commerce.productAdjective(),
                  Details: {
                      BluetoothVersion: faker.datatype.boolean() ? faker.system.semver() : null,
                      BatteryLifeHours: faker.datatype.number({ min: 1, max: 24 }),
                      WarrantyMonths: faker.datatype.number({ min: 6, max: 24 }),
                  },
              },
              {
                  SubcategoryName: faker.commerce.productAdjective(),
                  Details: {
                      CompatibleDevices: Array.from({ length: faker.datatype.number({ min: 1, max: 3 }) }, () => faker.commerce.productName()),
                      WeightGrams: faker.datatype.number({ min: 100, max: 2000 }),
                  },
              },
          ],
      })),
  };
}
