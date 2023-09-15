const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../middlewares/verifyToken')
const validateObjectld = require('../middlewares/validateObjectld')
const { getServiceProvider, getCountServiceProvider, createServiceProvider, updateserviceProvider, deleteServiceProvider } = require('../controllers/serviceProviderController')


// route 
router.route('/')
    .get(verifyTokenAdmin, getServiceProvider)
    .post(verifyTokenAdmin, createServiceProvider)

router.route('/count')
    .get(verifyTokenAdmin, getCountServiceProvider)

router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateserviceProvider)
    .delete(verifyTokenAdmin, validateObjectld, deleteServiceProvider)



module.exports = router
