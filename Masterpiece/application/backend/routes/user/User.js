const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndOnlyUser } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getAllUsertCtrl, getCountUsertCtrl, changePasswordCtrl, updateUserCtrl, deleteUsertCtrl } = require('../../controllers/User/UserController')
const photoUpload = require('../../middlewares/photoupload')



// route 
router.route('/')
    .get(verifyToken, getAllUsertCtrl)



router.route('/count')
    .get(verifyToken, getCountUsertCtrl)


router.route('/change-password/:id')
    .put(verifyTokenAndOnlyUser, changePasswordCtrl)


router.route('/:id')
    .put(verifyToken, validateObjectld, photoUpload.single('image'), updateUserCtrl)
    .delete(verifyTokenAndOnlyUser, validateObjectld, deleteUsertCtrl)



module.exports = router
