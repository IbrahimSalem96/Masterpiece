const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getA11AuctionServiceCrtl } = require('../../controllers/scrap/scrapAuctionController')



// route 
router.route('/')
    .get(verifyTokenAdmin, getA11AuctionServiceCrtl)






module.exports = router
