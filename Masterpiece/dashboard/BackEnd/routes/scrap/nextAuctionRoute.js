const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11NextAuctionCrtl, getActiveNextAuctionCrtl, getCountNextAuctionCrtl, createNextAuctionCrtl, updateNextAuctionCrtl, deleteNextAuctionCrtl } = require('../../controllers/scrap/nextAuctionController')
const photoUpload = require('../../middlewares/photoupload')



// route 
router.route('/')
    .get(verifyTokenAdmin, getA11NextAuctionCrtl)
    .post(verifyTokenAdmin, photoUpload.single('image'), createNextAuctionCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountNextAuctionCrtl)


router.route('/active/:id')
    .get(validateObjectld, verifyTokenAdmin, getActiveNextAuctionCrtl)


router.route('/:id')
    .put(validateObjectld, verifyTokenAdmin, photoUpload.single('image'), updateNextAuctionCrtl)
    .delete(validateObjectld, verifyTokenAdmin, deleteNextAuctionCrtl)






module.exports = router
