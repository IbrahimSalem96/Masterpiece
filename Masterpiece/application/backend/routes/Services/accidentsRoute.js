const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { createAccidentsCrtl } = require('../../controllers/Services/AccidentsController')

// route 
router.route('/')
    .post(verifyToken, createAccidentsCrtl)


module.exports = router
