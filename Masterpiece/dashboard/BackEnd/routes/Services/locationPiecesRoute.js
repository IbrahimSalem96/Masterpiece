const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11LocationPiecesCrtl, getCountLocationPiecesCrtl,
    createLocationPiecesCrtl, updateLocationPiecesCrtl, deleteLocationPiecesCrtl,
    getStatusLocationPiecesCrtl } = require('../../controllers/Services/locationPiecesController')
const photoUpload = require('../../middlewares/photoupload')


// route 
router.route('/')
    .get(verifyTokenAdmin, getA11LocationPiecesCrtl)
    .post(verifyTokenAdmin, photoUpload.single('image'), createLocationPiecesCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountLocationPiecesCrtl)


router.route('/status/:id')
    .put(verifyTokenAdmin, getStatusLocationPiecesCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, photoUpload.single('image'), updateLocationPiecesCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteLocationPiecesCrtl)



module.exports = router
