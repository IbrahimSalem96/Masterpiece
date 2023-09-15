const express = require('express')
const router = express.Router()
const { getAllBusesPostCrtl } = require('../../controllers/shops/busesControllers')

//   
router.route('/')
    .get(getAllBusesPostCrtl)

module.exports = router
