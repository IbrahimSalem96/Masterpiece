const express = require('express')
const router = express.Router()
const { getAllScrapPostCrtl } = require('../../controllers/shops/scrapControllers')

//   
router.route('/')
    .get(getAllScrapPostCrtl)


module.exports = router
