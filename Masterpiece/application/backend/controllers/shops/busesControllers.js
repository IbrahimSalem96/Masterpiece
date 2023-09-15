const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Buses
 *  @route /api/shop/buses 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllBusesPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Buses' }).populate('user', ['-password'])
    res.status(200).json(post)
})

