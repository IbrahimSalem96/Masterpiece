const asyncHandler = require('express-async-handler')
const { NextAuction, ValidateCreatedNextAuction } = require('../../models/Scrap/NextAuction')
const { cloudinaryUploadImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')


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



module.exports = { createNextAuctionCrtl }