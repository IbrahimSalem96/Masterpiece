const asyncHandler = require('express-async-handler')
const { NextAuction, ValidateCreatedNextAuction, ValidateUpdateNextAuction } = require('../../models/Scrap/NextAuction')
const { cloudinaryUploadImage, cloudinaryRemoveImage, cloudinaryRemoveMultipleImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')

/**
 *  @desc Get All Scrap Auction Service
 *  @route /api/scrap/auction-service
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11AuctionServiceCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.find({ active: true }).populate("user", ["-password"])
    if (nextAuction) {
        res.status(200).json(nextAuction)
    } else {
        res.status(200).json({ message: 'There are no auctions at this time' })
    }
})

/**
 *  @desc Get Count Scrap Auction Service
 *  @route /api/scrap/auction-service/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountAuctionServiceCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.find({ active: true }).count()
    if (nextAuction) {
        res.status(200).json(nextAuction)
    } else {
        res.status(200).json({ message: 'There are no auctions at this time' })
    }
})

/**
 *  @desc Active Next Auction
 *  @route /api/scrap/auction-servicen/active/:id
 *  @method PUT
 *  @access private ( only Admin )  
 */
const getInActiveNextAuctionCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.findById(req.params.id)
    if (nextAuction) {
        nextAuction.active = false
        await nextAuction.save()
        res.status(200).json({ message: "The auction has been inactivated" });
    } else {
        res.status(404).json({ message: "Auction not found . . !" });
    }

})


/**
 *  @desc Update Scrap Auction Service
 *  @route /api/scrap/auction-service/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateAuctionServiceCrtl = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "Image file is required" });
    } else {
        const { error } = ValidateUpdateNextAuction(req.body);
        if (error) {
            res.status(400).json({ message: error.details[0].message });
        } else {
            const nextAuction = await NextAuction.findById(req.params.id);
            if (!nextAuction) {
                res.status(404).json({ message: "Auction not found" });
            } else {

                await cloudinaryRemoveImage(nextAuction.image.publicId);

                const imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
                const result = await cloudinaryUploadImage(imagePath);

                const upDatenextAuction = await NextAuction.findByIdAndUpdate(req.params.id, {
                    $set: {
                        scrapName: req.body.ScrapName,
                        phone: req.body.phone,
                        Details: req.body.Details,
                        StartingPrice: req.body.StartingPrice,
                        details: req.body.details,
                        user: req.user.id,
                        date: req.body.date,
                        time: req.body.time,
                        image: {
                            url: result.secure_url,
                            publicId: result.public_id,
                        },
                    },
                });

                if (upDatenextAuction) {
                    res.status(200).json({ message: 'Modified successfully' });
                    fs.unlinkSync(imagePath);
                } else {
                    res.status(404).json({ message: "Auction not found . . !" });
                }
            }
        }
    }
})



/**
 *  @desc Delete Scrap Auction Service
 *  @route /api/scrap/auction-service/:id
 *  @method DELETE
 *  @access private ( only Admin )  
 */
const deleteAuctionServiceCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.findById(req.params.id);
    if (nextAuction) {
        await NextAuction.findByIdAndDelete(req.params.id);
        await cloudinaryRemoveImage(nextAuction.image.publicId);
        res.status(200).json({ message: "Auction has been deleted" });
    } else {
        res.status(404).json({ message: "Auction not found . . !" });
    }
});



module.exports = { getA11AuctionServiceCrtl, getInActiveNextAuctionCrtl, getCountAuctionServiceCrtl, updateAuctionServiceCrtl, deleteAuctionServiceCrtl }