const express = require('express')
const router = express.Router()
const { getAllSparePartsPostCrtl } = require('../../controllers/shops/sparePartsControllers')

//   
router.route('/')
    .get(getAllSparePartsPostCrtl)

module.exports = router
