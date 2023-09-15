const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Scrap
 *  @route /api/shop/scrap 
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
module.exports.getAllScrapPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Scrap' }).populate('user', ['-password'])
    res.status(200).json(post)
})



/**
 *  @desc Get Count Post Scrap
 *  @route /api/shop/scrap/count
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getScrapCountPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Scrap' }).count()
    res.status(200).json(post)
})



/**
 *  @desc Delete Services Rental
 *  @route /api/shop/scrap/:id
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