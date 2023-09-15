const express = require('express')
const router = express.Router()
const { getAllMotorcyclesPostCrtl } = require('../../controllers/shops/motorcyclesControllers')

//   
router.route('/')
    .get(getAllMotorcyclesPostCrtl)

module.exports = router
