const express = require('express');
const CategorieController = require('../controllers/categorie');
const router = express.Router();
router
.get('/',CategorieController.getAll)
router.post('/',CategorieController.addNew)
router.patch('/reorder',CategorieController.changeOrder)
exports.router = router;