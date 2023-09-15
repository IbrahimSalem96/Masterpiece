const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { getA11RentalCrtl, createRentalCrtl } = require('../../controllers/Services/RentalController')
const validateObjectld = require('../../middlewares/validateObjectld')


// route 
router.route('/')
    .get(verifyToken, getA11RentalCrtl)

router.route('/:id')
    .post(verifyToken, validateObjectld, createRentalCrtl)

module.exports = router


