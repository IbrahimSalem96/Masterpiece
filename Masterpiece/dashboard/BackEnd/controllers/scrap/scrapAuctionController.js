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
        res.status(200).json({ message: 'There are no auctions at this time', nextAuction })
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
    const nextAuction = await NextAuction.findById(req.params.id);
    if (!nextAuction) {
        res.status(404).json({ message: "Auction not found" })
    }

    const updatedFields = {};

    if (req.body.ScrapName) {
        updatedFields.scrapName = req.body.ScrapName;
    }

    if (req.body.phone) {
        updatedFields.phone = req.body.phone;
    }

    if (req.body.Details) {
        updatedFields.Details = req.body.Details;
    }

    if (req.body.StartingPrice) {
        updatedFields.StartingPrice = req.body.StartingPrice;
    }

    if (req.body.details) {
        updatedFields.details = req.body.details;
    }

    if (req.body.date) {
        updatedFields.date = req.body.date;
    }

    if (req.body.time) {
        updatedFields.time = req.body.time;
    }

    if (req.file) {
        await cloudinaryRemoveImage(nextAuction.image.publicId);

        const imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
        const result = await cloudinaryUploadImage(imagePath);

        updatedFields.image = {
            url: result.secure_url,
            publicId: result.public_id,
        };

        fs.unlinkSync(imagePath);
    }

    const upDatenextAuction = await NextAuction.findByIdAndUpdate(req.params.id, {
        $set: updatedFields,
    });

    if (upDatenextAuction) {
        res.status(200).json({ message: 'Modified successfully' });
    } else {
        res.status(404).json({ message: "Auction not found . . !" });
    }
});



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