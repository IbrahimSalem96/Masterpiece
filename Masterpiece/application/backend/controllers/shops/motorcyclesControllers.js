const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Motorcycles
 *  @route /api/shop/motorcycles 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllMotorcyclesPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Motorcycles' }).populate('user', ['-password'])
    res.status(200).json(post)
})

