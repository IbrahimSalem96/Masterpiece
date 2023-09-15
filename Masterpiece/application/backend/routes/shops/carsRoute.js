const express = require('express')
const router = express.Router()
const { getAllCarPostCrtl } = require('../../controllers/shops/carsControllers')

//   
router.route('/')
    .get(getAllCarPostCrtl)

module.exports = router
