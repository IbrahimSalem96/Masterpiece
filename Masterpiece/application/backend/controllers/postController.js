const asyncHandler = require('express-async-handler')
const { Post, ValidateCreatedPost, ValidateUpdatePost } = require('../models/Post')
const { User } = require('../models/User')
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
 *  @access public  
---------------------------------------------------------------*/
const getPostByIdCrtl = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
})


/**-------------------------------------------------------------
 *  @desc Get My Post
 *  @route /api/post/my-post/
 *  @method GET
 *  @access public  
---------------------------------------------------------------*/
const getMyPostCrtl = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.params.id });
    res.status(200).json(posts);
});


/**-------------------------------------------------------------
 *  @desc Created New Post
 *  @route /api/post
 *  @method POST
 *  @access private ( only User )  
---------------------------------------------------------------*/
const createNewPostCrtl = asyncHandler(async (req, res) => {

    // const { error } = ValidateCreatedPost(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }

    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(400).json({ message: "User not found" })
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
 *  @access private (Admin or user himselft )
---------------------------------------------------------------*/
const updatePostCtrl = asyncHandler(async (req, res) => {
    const { error } = ValidateUpdatePost(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(404).json("post not found")
    }

    if (req.user.id !== post.user.toString()) {
        res.status(403).json({ message: 'access denied, you are not allowed' })
    }

    await cloudinaryRemoveImage(post.image.publicId)

    const imagePath = path.join(__dirname, `../images/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath);

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
        $set: {
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
        }
    }, { new: true })

    fs.unlinkSync(imagePath);
    res.status(201).json(updatedPost)
})


/**-------------------------------------------------------------
 *  @desc Delete a Post
 *  @route /api/post/:id
 *  @method DELETE
 *  @access private (Admin or user himselft )
---------------------------------------------------------------*/
const deletePostCtrl = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    if (req.user.id !== post.user.toString()) {
        return res.status(403).json({ message: 'Access denied, you are not allowed to delete this post' });
    }

    await cloudinaryRemoveImage(post.image.publicId);
    await post.deleteOne({ _id: req.params.id });

    return res.status(200).json({ message: "Post has been deleted" });
});




module.exports = { getAllPostCrtl, getPostByIdCrtl, getMyPostCrtl, createNewPostCrtl, updatePostCtrl, deletePostCtrl }