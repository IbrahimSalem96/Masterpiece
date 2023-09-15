const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11MaintenanceCrtl, getCountMaintenanceCrtl, createMaintenanceCrtl, updateMaintenanceCrtl, deleteMaintenanceCrtl } = require('../../controllers/agencies/maintenance')

// route 
router.route('/')
    .get(verifyTokenAdmin, getA11MaintenanceCrtl)
    .post(verifyTokenAdmin, createMaintenanceCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountMaintenanceCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateMaintenanceCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteMaintenanceCrtl)



module.exports = router
