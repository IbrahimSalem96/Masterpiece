const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllCarPostCrtl, getCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/carsControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllCarPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountPostCrtl)


router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)


module.exports = router
