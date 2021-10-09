import express from 'express';
import Product from '../models/productModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProductById,
  getTopRatedProducts,
  createProductReview,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/top').get(getTopRatedProducts);
router.route('/').get(getProducts).post(protect, admin, createProduct);

router.route('/:id/reviews').post(protect, createProductReview);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProductById);

export default router;
