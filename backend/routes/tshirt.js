const express = require('express')
const router = express.Router();
const {getAdminProducts,newTshirt, deleteTshirt, getProducts, getSingleTshirt} = require('../controllers/tshirtController')
const {isAuthenticatedUser,authorizeRoles} =require('../middlewares/auth')


router.route('/tshirt').get(getProducts);

router.route('/tshirt/:id').get(getSingleTshirt);
router.route('/admin/tshirt/new').post(isAuthenticatedUser,authorizeRoles('admin'),newTshirt);
router.route('/admin/tshirts').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);

router.route('/admin/tshirt/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteTshirt);
module.exports = router;