const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllBusesPostCrtl, getBusesCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/busesControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllBusesPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getBusesCountPostCrtl)

router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)



module.exports = router
