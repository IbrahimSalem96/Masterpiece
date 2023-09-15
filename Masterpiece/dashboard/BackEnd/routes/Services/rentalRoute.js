const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const {
    getA11RentalCrtl, getCountRentalCrtl,
    createRentalCrtl, updateRentalCrtl, deleteRentalCrtl, getStatusRentalCrtl
} = require('../../controllers/Services/RentalController')
const photoUpload = require('../../middlewares/photoupload')



// route 
router.route('/')
    .get(verifyTokenAdmin, getA11RentalCrtl)
    .post(verifyTokenAdmin, photoUpload.single('image'), createRentalCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountRentalCrtl)


router.route('/status/:id')
    .put(verifyTokenAdmin, getStatusRentalCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, photoUpload.single('image'), updateRentalCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteRentalCrtl)



module.exports = router


