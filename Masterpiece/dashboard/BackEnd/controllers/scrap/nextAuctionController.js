const asyncHandler = require('express-async-handler')
const { NextAuction, ValidateCreatedNextAuction, ValidateUpdateNextAuction } = require('../../models/Scrap/NextAuction')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')

/**
 *  @desc Get All Next Auction
 *  @route /api/scrap/next-auction
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11NextAuctionCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.find().populate("user", ["-password"])
    res.status(200).json(nextAuction)
})

/**
 *  @desc Get Count Next Auction
 *  @route /api/scrap/next-auction/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountNextAuctionCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.count()
    res.status(200).json(nextAuction)
})


/**
 *  @desc Active Next Auction
 *  @route /api/scrap/next-auction/active/:id
 *  @method PUT
 *  @access private ( only Admin )  
 */
const getActiveNextAuctionCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.findById(req.params.id)
    if (nextAuction) {
        if (nextAuction.active) {
            nextAuction.active = false
            await nextAuction.save()
            res.status(200).json({ message: "Activation has been deactivated" });
        } else {
            nextAuction.active = true
            await nextAuction.save()
            res.status(200).json({ message: "The auction has been confirmed and activated" });
        }

    } else {
        res.status(404).json({ message: "Auction not found . . !" });
    }

})



/**
 *  @desc Created Next Auction
 *  @route /api/scrap/next-auction
 *  @method POST
 *  @access private ( user himselft )
 */
const createNextAuctionCrtl = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "no file provided" })
    }

    const { error } = ValidateCreatedNextAuction(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const imagePath = path.join(__dirname, `../../images/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath)

    const nextAuction = new NextAuction({
        scrapName: req.body.scrapName,
        phone: req.body.phone,
        details: req.body.details,
        startingPrice: req.body.startingPrice,
        user: req.user.id,
        date: req.body.date,
        time: req.body.time,
        image: {
            url: result.secure_url,
            publicId: result.public_id
        }
    })

    await nextAuction.save()
    fs.unlinkSync(imagePath)
    res.status(201).json({ message: 'The request has been added successfully' })

})



/**
 *  @desc Update a Next Auction
 *  @route /api/scrap/next-auction/:id
 *  @method PUT
 *  @access private ( only Admin  )
 */
const updateNextAuctionCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateNextAuction(req.body);
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message });
    //     return;
    // }

    const nextAuction = await NextAuction.findById(req.params.id);
    if (!nextAuction) {
        res.status(404).json({ message: "Next Auction not found" });
        return;
    }

    let imagePath;

    if (req.file) {
        imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
        await cloudinaryRemoveImage(nextAuction.image.publicId);
    }

    const result = req.file ? await cloudinaryUploadImage(imagePath) : null;

    const updateFields = {};

    if (req.body.scrapName) {
        updateFields.scrapName = req.body.scrapName;
    }
    if (req.body.phone) {
        updateFields.phone = req.body.phone;
    }
    if (req.body.details) {
        updateFields.details = req.body.details;
    }
    if (req.body.StartingPrice) {
        updateFields.startingPrice = req.body.StartingPrice;
    }
    if (req.body.date) {
        updateFields.date = req.body.date;
    }
    if (req.body.time) {
        updateFields.time = req.body.time;
    }

    if (result) {
        updateFields.image = {
            url: result.secure_url,
            publicId: result.public_id,
        };
    }

    const upDatenextAuction = await NextAuction.findByIdAndUpdate(
        req.params.id,
        { $set: updateFields },
        { new: true } // Return the updated document
    );

    if (upDatenextAuction) {
        res.status(200).json({ message: 'Modified successfully' });
        if (req.file) {
            fs.unlinkSync(imagePath);
        }
    } else {
        res.status(404).json({ message: "Next Auction not found . . !" });
    }
});




/**
 * 
 *  @desc Delete Next Auction
 *  @route /api/scrap/next-auction/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteNextAuctionCrtl = asyncHandler(async (req, res) => {
    const nextAuction = await NextAuction.findById(req.params.id);
    if (nextAuction) {
        await NextAuction.findByIdAndDelete(req.params.id);
        await cloudinaryRemoveImage(nextAuction.image.publicId);
        res.status(200).json({ message: "Next Auction has been deleted" });
    } else {
        res.status(404).json({ message: "Next Auction not found . . !" });
    }
});



module.exports = { getA11NextAuctionCrtl, getActiveNextAuctionCrtl, getCountNextAuctionCrtl, createNextAuctionCrtl, updateNextAuctionCrtl, deleteNextAuctionCrtl }