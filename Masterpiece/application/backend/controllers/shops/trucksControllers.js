const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Trucks
 *  @route /api/shop/trucks 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllTrucksPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Trucks' }).populate('user', ['-password'])
    res.status(200).json(post)
})


