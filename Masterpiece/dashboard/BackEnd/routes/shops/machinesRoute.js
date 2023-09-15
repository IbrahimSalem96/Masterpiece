const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllMachinesPostCrtl, getMachinesCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/machinesControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllMachinesPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getMachinesCountPostCrtl)


router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)


module.exports = router
