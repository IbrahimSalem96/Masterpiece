const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Spare Parts
 *  @route /api/shop/spare-parts 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllSparePartsPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Spare Parts' }).populate('user', ['-password'])
    res.status(200).json(post)
})

