const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../middlewares/verifyToken')
const validateObjectld = require('../middlewares/validateObjectld')
const photoUpload = require('../middlewares/photoupload')
const { getAllPostCrtl, getAllPostByIdCrtl, getCountPostCrtl, createNewPostCrtl, updatePostCtrl, deletePostCtrl } = require('../controllers/postController')


// route 
router.route('/')
    .get(verifyTokenAdmin, getAllPostCrtl)
    .post(verifyTokenAdmin, photoUpload.single('image'), createNewPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountPostCrtl)


router.route('/:id')
    .get(verifyTokenAdmin, getAllPostByIdCrtl)


router.route('/:id')
    .put(validateObjectld, verifyTokenAdmin, photoUpload.single('image'), updatePostCtrl)
    .delete(validateObjectld, verifyTokenAdmin, deletePostCtrl)


module.exports = router
