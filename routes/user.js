const express = require('express')
const Controller = require("../controllers/user")
const router = express.Router()

router.post('/signup',Controller.signup)
router.post('/signin',Controller.signin)
exports.router = router