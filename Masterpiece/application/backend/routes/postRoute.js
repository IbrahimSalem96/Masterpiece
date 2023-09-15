const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndOnlyUser } = require('../middlewares/verifyToken')
const validateObjectld = require('../middlewares/validateObjectld')
const photoUpload = require('../middlewares/photoupload')
const { getAllPostCrtl, getPostByIdCrtl, getMyPostCrtl, createNewPostCrtl, updatePostCtrl, deletePostCtrl } = require('../controllers/postController')


// route 
router.route('/')
    .get(getAllPostCrtl)
    .post(verifyToken, photoUpload.single('image'), createNewPostCrtl)


router.route('/my-post/:id')
    .get(validateObjectld, verifyTokenAndOnlyUser, getMyPostCrtl)


router.route('/:id')
    .get(validateObjectld, getPostByIdCrtl)
    .put(validateObjectld, verifyToken, photoUpload.single('image'), updatePostCtrl)
    .delete(validateObjectld, verifyToken, deletePostCtrl)


module.exports = router
