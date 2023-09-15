const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllSparePartsPostCrtl, getSparePartsCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/sparePartsControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllSparePartsPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getSparePartsCountPostCrtl)


router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)


module.exports = router
