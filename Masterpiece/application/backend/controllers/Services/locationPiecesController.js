const asyncHandler = require('express-async-handler')
const { LocationPieces, ValidateCreatedLocationPieces } = require('../../models/Services/LocationPieces')
const { cloudinaryUploadImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')


/**
 *  @desc Created Services Location Pieces
 *  @route /api/services/Location-Pieces
 *  @method POST
 *  @access private ( only User  )
 */
const createLocationPiecesCrtl = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "no file provided" })
    }

    const { error } = ValidateCreatedLocationPieces(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const imagePath = path.join(__dirname, `../../images/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath)

    const rental = new LocationPieces({
        type: req.body.type,
        details: req.body.details,
        image: {
            url: result.secure_url,
            publicId: result.public_id
        },
        phone: req.body.phone,
    })

    await rental.save()
    fs.unlinkSync(imagePath)
    res.status(201).json({ message: 'Added successfully' })
})



module.exports = { createLocationPiecesCrtl }