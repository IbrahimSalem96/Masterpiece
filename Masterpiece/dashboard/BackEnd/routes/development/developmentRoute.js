const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getDevelopmentCtrl, getCountDevelopmentCtrl, createDevelopmentCtrl, updateDevelopmentCtrl, deleteDevelopmentCtrl } = require('../../controllers/development/developmentController')

// route 
router.route('/')
    .get(verifyTokenAdmin, getDevelopmentCtrl)
    .post(verifyTokenAdmin, createDevelopmentCtrl)


router.route('/count')
    .get(verifyTokenAdmin, getCountDevelopmentCtrl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateDevelopmentCtrl)
    .delete(verifyTokenAdmin, validateObjectld, deleteDevelopmentCtrl)



module.exports = router
