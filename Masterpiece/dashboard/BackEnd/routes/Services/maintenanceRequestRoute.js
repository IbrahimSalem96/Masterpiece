const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11MaintenanceRequestCrtl, getCountMaintenanceRequestCrtl, createMaintenanceRequestCrtl,
    updateMaintenanceRequestCrtl, deleteMaintenanceRequestCrtl,
    getStatusMaintenanceRequestCrtl } = require('../../controllers/Services/MaintenanceRequestController')

// route 
router.route('/')
    .get(verifyTokenAdmin, getA11MaintenanceRequestCrtl)
    .post(verifyTokenAdmin, createMaintenanceRequestCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountMaintenanceRequestCrtl)


router.route('/status/:id')
    .put(verifyTokenAdmin, getStatusMaintenanceRequestCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateMaintenanceRequestCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteMaintenanceRequestCrtl)



module.exports = router


