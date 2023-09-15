const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { createLocationPiecesCrtl } = require('../../controllers/Services/locationPiecesController')
const photoUpload = require('../../middlewares/photoupload')


// route 
router.route('/')
    .post(verifyToken, photoUpload.single('image'), createLocationPiecesCrtl)


module.exports = router
