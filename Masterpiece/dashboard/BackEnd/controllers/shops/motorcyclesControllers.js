const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Motorcycles
 *  @route /api/shop/motorcycles 
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
module.exports.getAllMotorcyclesPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Motorcycles' }).populate('user', ['-password'])
    res.status(200).json(post)
})



/**
 *  @desc Get Count Post Motorcycles
 *  @route /api/shop/motorcycles/count
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getMotorcyclesCountPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Motorcycles' }).count()
    res.status(200).json(post)
})



/**
 *  @desc Delete Services Rental
 *  @route /api/shop/motorcycles/:id
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