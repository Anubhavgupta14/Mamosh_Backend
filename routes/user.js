const express = require('express')
const Controller = require("../controllers/user")
const router = express.Router()

router.post('/',Controller.signup)
exports.router = router