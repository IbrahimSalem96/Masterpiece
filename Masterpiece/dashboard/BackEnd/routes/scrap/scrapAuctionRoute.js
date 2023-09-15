const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11AuctionServiceCrtl, getInActiveNextAuctionCrtl, getCountAuctionServiceCrtl, updateAuctionServiceCrtl, deleteAuctionServiceCrtl } = require('../../controllers/scrap/scrapAuctionController')
const photoUpload = require('../../middlewares/photoupload')



// route 
router.route('/')
    .get(verifyTokenAdmin, getA11AuctionServiceCrtl)
//     .post(verifyToken, photoUpload.single('image'), createNextAuctionCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountAuctionServiceCrtl)


router.route('/active/:id')
    .get(validateObjectld, verifyTokenAdmin, getInActiveNextAuctionCrtl)


router.route('/:id')
    .put(validateObjectld, verifyTokenAdmin, photoUpload.single('image'), updateAuctionServiceCrtl)
    .delete(validateObjectld, verifyTokenAdmin, deleteAuctionServiceCrtl)






module.exports = router
