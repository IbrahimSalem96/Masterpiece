const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { createMaintenanceRequestCrtl } = require('../../controllers/Services/MaintenanceRequestController')

// route 
router.route('/')
    .post(verifyToken, createMaintenanceRequestCrtl)



module.exports = router


