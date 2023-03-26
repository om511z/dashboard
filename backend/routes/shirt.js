const express = require('express')
const router = express.Router();
const {newShirt,getAdminProducts, deleteShirt, getProducts, getSingleShirt} = require('../controllers/shirtController')
const {isAuthenticatedUser,authorizeRoles} =require('../middlewares/auth')


router.route('/shirt').get(getProducts);

router.route('/shirt/:id').get(getSingleShirt);
router.route('/admin/shirt/new').post(isAuthenticatedUser,authorizeRoles('admin'),newShirt);
router.route('/admin/shirts').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);

router.route('/admin/shirt/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteShirt);
module.exports = router;

