const express = require('express')
const router = express.Router();
const {newKurta,getAdminProducts, deleteKurta, getProducts, getSingleKurta} = require('../controllers/kurtaController')
const {isAuthenticatedUser,authorizeRoles} =require('../middlewares/auth')


router.route('/kurtas').get(getProducts);
router.route('/kurtas/:id').get(getSingleKurta);
router.route('/admin/kurta/new').post(isAuthenticatedUser,authorizeRoles('admin'),newKurta);
router.route('/admin/kurtas').get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);

router.route('/admin/kurta/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteKurta);
module.exports = router;
