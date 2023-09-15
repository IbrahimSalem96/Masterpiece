const express = require('express')
const router = express.Router()
const { getAllTrucksPostCrtl } = require('../../controllers/shops/trucksControllers')

//   
router.route('/')
    .get(getAllTrucksPostCrtl)

module.exports = router
