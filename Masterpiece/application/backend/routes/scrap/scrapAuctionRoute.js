const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { getA11AuctionServiceCrtl } = require('../../controllers/scrap/scrapAuctionController')



// route 
router.route('/')
    .get(verifyToken, getA11AuctionServiceCrtl)






module.exports = router
