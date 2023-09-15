const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllTrucksPostCrtl, getTrucksCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/trucksControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllTrucksPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getTrucksCountPostCrtl)


router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)


module.exports = router
