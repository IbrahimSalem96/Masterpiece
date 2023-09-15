const asyncHandler = require('express-async-handler')
const { Post } = require('../../models//Post')



/**-------------------------------------------------------------
 *  @desc Get all Post Machines
 *  @route /api/shop/machines 
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
module.exports.getAllMachinesPostCrtl = asyncHandler(async (req, res) => {
    const post = await Post.find({ section: 'Machines' }).populate('user', ['-password'])
    res.status(200).json(post)
})

