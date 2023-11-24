const express = require('express');
const Controller = require('../controllers/subcategorie');
const router = express.Router();
router
.get('/',Controller.getAll)
router.post('/',Controller.addNew)
router.patch('/reorder',Controller.changeOrder)
exports.router = router;