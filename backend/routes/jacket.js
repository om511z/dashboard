const express = require('express')
const router = express.Router();
const {newJacket,getAdminProducts, deleteJacket, getProducts, getSingleJacket} = require('../controllers/jacketController')
const {isAuthenticatedUser,authorizeRoles} =require('../middlewares/auth')


router.route('/jacket').get(getProducts);
router.route('/jacket/:id').get(getSingleJacket);
router.route('/admin/jacket/new').post(isAuthenticatedUser,authorizeRoles('admin'),newJacket);
router.route('/admin/jackets').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);

router.route('/admin/jacket/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteJacket);
module.exports = router;