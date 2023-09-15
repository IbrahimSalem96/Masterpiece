const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { createNextAuctionCrtl } = require('../../controllers/scrap/nextAuctionController')
const photoUpload = require('../../middlewares/photoupload')



// route 
router.route('/')
    .post(verifyToken, photoUpload.single('image'), createNextAuctionCrtl)




module.exports = router
