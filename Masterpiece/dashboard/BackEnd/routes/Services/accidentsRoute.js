const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11AccidentsCrtl, getCountAccidentsCrtl, createAccidentsCrtl, updateAccidentsCrtl, deleteAccidentsCrtl, getStatusAccidentsCrtl } = require('../../controllers/Services/AccidentsController')

// route 
router.route('/')
    .get(verifyTokenAdmin, getA11AccidentsCrtl)
    .post(verifyTokenAdmin, createAccidentsCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountAccidentsCrtl)


router.route('/status/:id')
    .put(verifyTokenAdmin, getStatusAccidentsCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateAccidentsCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteAccidentsCrtl)



module.exports = router
