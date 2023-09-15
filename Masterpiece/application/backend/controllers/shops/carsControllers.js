const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Car
 *  @route /api/shop/car 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllCarPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Cars' }).populate('user', ['-password'])
    res.status(200).json(post)
})
