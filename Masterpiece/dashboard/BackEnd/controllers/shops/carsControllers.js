const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../../utils/cloudinary')



/**-------------------------------------------------------------
 *  @desc Get all Post Car
 *  @route /api/shop/car 
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
module.exports.getAllCarPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Cars' }).populate('user', ['-password'])
    res.status(200).json(post)
})


/**
 *  @desc Get Count Post Car
 *  @route /api/shop/car/count
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getCountPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Cars' }).count()
    res.status(200).json(post)
})


/**
 *  @desc Get Count Post Car
 *  @route /api/shop/car/count
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getCountPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Cars' }).count()
    res.status(200).json(post)
})


/**
 *  @desc Delete Services Rental
 *  @route /api/shop/car/:id
 *  @method DELETE
 * @access private ( only Admin )  
 */
module.exports.deletePostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        await Post.findByIdAndDelete(req.params.id);
        await cloudinaryRemoveImage(post.image.publicId);
        res.status(200).json({ message: "Post has been deleted" });
    } else {
        res.status(404).json({ message: "Post not found . . !" });
    }
});