import colors from 'colors';
import dotenv from 'dotenv';
import users from './data/users.js';
import connectDB from './config/db.js';
import User from './models/userModel.js';
import products from './data/products.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('All tasks handled!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Promise.all([
      Order.deleteMany(),
      User.deleteMany(),
      Product.deleteMany(),
    ]);

    console.log('All Data destroyed!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
