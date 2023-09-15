const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { createBeforeBuyingCrtl } = require('../../controllers/Services/BeforeBuyingController')

// route 
router.route('/')
    .post(verifyToken, createBeforeBuyingCrtl)




module.exports = router
