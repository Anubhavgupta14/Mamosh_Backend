const express = require('express');
const Controller = require('../../controllers/product/product');
const router = express.Router();
router
.get('/',Controller.getAll)
router.post('/', Controller.addNew)
router.get('/getCategoryProducts', Controller.getCategoryProducts)
router.get('/getNonCategoryProducts', Controller.getNonCategoryProducts)
exports.router = router;