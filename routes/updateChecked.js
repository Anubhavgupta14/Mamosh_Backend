// api.js
const express = require('express');
const Product = require('../models/Product');
const Controller = require('../controllers/updateChecked');

const router = express.Router();

router.put('/', Controller.updateChecked);
exports.router = router;
