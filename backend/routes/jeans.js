const express = require('express')
const router = express.Router();
const {newJeans,getAdminProducts, deleteJeans, getProducts, getSingleJeans} = require('../controllers/jeansController')
const {isAuthenticatedUser,authorizeRoles} =require('../middlewares/auth')


router.route('/jeans').get(getProducts);

router.route('/jeans/:id').get(getSingleJeans);
router.route('/admin/jeans/new').post(isAuthenticatedUser,authorizeRoles('admin'),newJeans);
router.route('/admin/jeans').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);

router.route('/admin/jeans/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteJeans);
module.exports = router;