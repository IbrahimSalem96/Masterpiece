const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11ABeforeBuyingCrtl, getCountBeforeBuyingCrtl, createBeforeBuyingCrtl, updateBeforeBuyingCrtl, deleteBeforeBuyingCrtl, getStatusBeforeBuyingCrtl } = require('../../controllers/Services/BeforeBuyingController')

// route 
router.route('/')
    .get(verifyTokenAdmin, getA11ABeforeBuyingCrtl)
    .post(verifyTokenAdmin, createBeforeBuyingCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountBeforeBuyingCrtl)


router.route('/status/:id')
    .put(verifyTokenAdmin, getStatusBeforeBuyingCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateBeforeBuyingCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteBeforeBuyingCrtl)



module.exports = router
