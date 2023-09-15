const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { createMaintenanceCrtl } = require('../../controllers/agencies/maintenance')

// route 
router.route('/')
    .post(verifyToken, createMaintenanceCrtl)


module.exports = router
