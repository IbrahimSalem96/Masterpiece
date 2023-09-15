const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Spare Parts
 *  @route /api/shop/spare-parts 
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
module.exports.getAllSparePartsPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Spare Parts' }).populate('user', ['-password'])
    res.status(200).json(post)
})



/**
 *  @desc Get Count Post Spare Parts
 *  @route /api/shop/spare-parts/count
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getSparePartsCountPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Spare Parts' }).count()
    res.status(200).json(post)
})



/**
 *  @desc Delete Services Rental
 *  @route /api/shop/spare-parts/:id
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