const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllMotorcyclesPostCrtl, getMotorcyclesCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/motorcyclesControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllMotorcyclesPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getMotorcyclesCountPostCrtl)


router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)


module.exports = router
