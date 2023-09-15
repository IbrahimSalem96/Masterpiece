const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Scrap
 *  @route /api/shop/scrap 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllScrapPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Scrap' }).populate('user', ['-password'])
    res.status(200).json(post)
})

