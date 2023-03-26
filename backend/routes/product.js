const express = require('express')
const router = express.Router();
const {isAuthenticatedUser,authorizeRoles} =require('../middlewares/auth')
const {getProducts,getAdminProducts,newProduct,updateProduct, deleteProduct, getSingleProduct} = require('../controllers/productController')

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);
router.route('/admin/products').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);
router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);

router.route('/admin/product/:id')
                        .put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
                        .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);
module.exports = router;