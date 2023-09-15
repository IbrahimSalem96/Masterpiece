const asyncHandler = require('express-async-handler')
const { Post, ValidateCreatedPost, ValidateUpdatePost } = require('../models//Post')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../utils/cloudinary')
const fs = require('fs')
const path = require('path')

/**-------------------------------------------------------------
 *  @desc Get all Post
 *  @route /api/post
 *  @method GET
 *  @access public  
---------------------------------------------------------------*/
const getAllPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find()
    res.status(200).json(post)
})


/**-------------------------------------------------------------
 *  @desc Get Post by Id 
 *  @route /api/post
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const getAllPostByIdCrtl = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
})


/**
 *  @desc Get Count Post
 *  @route /api/post/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.count()
    res.status(200).json(post)
})

/**-------------------------------------------------------------
 *  @desc Created New Post
 *  @route /api/post
 *  @method POST
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const createNewPostCrtl = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "no file provided" })
    }

    const { error } = ValidateCreatedPost(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const imagePath = path.join(__dirname, `../images/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath)

    const post = new Post({
        nameProduct: req.body.nameProduct,
        location: req.body.location,
        description: req.body.description,
        kilometres: req.body.kilometres,
        user: req.user.id,
        image: {
            url: result.secure_url,
            publicId: result.public_id
        },
        transmissionType: req.body.transmissionType,
        phone: req.body.phone,
        price: req.body.price,
        fuelType: req.body.fuelType,
        section: req.body.section,
    })

    await post.save()
    fs.unlinkSync(imagePath)
    res.status(201).json({ message: 'Post added successfully' })

})


/**-------------------------------------------------------------
 *  @desc Update a Post
 *  @route /api/post/:id
 *  @method PUT
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const updatePostCtrl = asyncHandler(async (req, res) => {
    const { error } = ValidateUpdatePost(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
        return;
    }

    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(404).json("post not found")
        return;
    }

    if (req.user.id !== post.user.toString()) {
        res.status(403).json({ message: 'access denied, you are not allowed' })
        return;
    }

    if (req.file) {
        await cloudinaryRemoveImage(post.image.publicId)
    }

    let imagePath;
    if (req.file) {
        imagePath = path.join(__dirname, `../images/${req.file.filename}`)
    }

    const result = req.file ? await cloudinaryUploadImage(imagePath) : null;

    const updateFields = {
        nameProduct: req.body.nameProduct,
        location: req.body.location,
        description: req.body.description,
        kilometres: req.body.kilometres,
        user: req.user.id,
        transmissionType: req.body.transmissionType,
        phone: req.body.phone,
        price: req.body.price,
        fuelType: req.body.fuelType,
        section: req.body.section,
    };

    if (result) {
        updateFields.image = {
            url: result.secure_url,
            publicId: result.public_id,
        };
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: updateFields }, { new: true });

    if (req.file) {
        fs.unlinkSync(imagePath);
    }

    res.status(201).json(updatedPost);
});


/**-------------------------------------------------------------
 *  @desc Delete a Post
 *  @route /api/post/:id
 *  @method DELETE
 *  @access private (Admin or user himselft )
---------------------------------------------------------------*/
const deletePostCtrl = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post) {
        if (req.user.id !== post.user.toString()) {
            res.status(403).json({ message: 'access denied, you are not allowed' })
        } else {
            await post.deleteOne({ _id: req.params.id })
            await cloudinaryRemoveImage(post.image.publicId);
            res.status(200).json({ message: "Post has been deleted" })
        }
    } else {
        res.status(404).json({ message: "Post not found!" })

    }
})



module.exports = { getAllPostCrtl, getAllPostByIdCrtl, getCountPostCrtl, createNewPostCrtl, updatePostCtrl, deletePostCtrl }