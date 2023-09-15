const asyncHandler = require('express-async-handler')
const { LocationPieces, ValidateCreatedLocationPieces, ValidateUpdateLocationPieces } = require('../../models/Services/LocationPieces')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')


/**
 *  @desc Get All Services Location Pieces
 *  @route /api/services/Location-Pieces
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11LocationPiecesCrtl = asyncHandler(async (req, res) => {
    const rental = await LocationPieces.find().populate('user', ['-password'])
    res.status(200).json(rental)
})


/**
 *  @desc Get Count Location Pieces
 *  @route /api/services/Location-Pieces/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountLocationPiecesCrtl = asyncHandler(async (req, res) => {
    const rental = await LocationPieces.count()
    res.status(200).json(rental)
})


/**
 *  @desc Created Services Location Pieces
 *  @route /api/services/Location-Pieces
 *  @method POST
 *  @access private ( only Admin  )
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
        user: req.user.id,
    })

    await rental.save()
    fs.unlinkSync(imagePath)
    res.status(201).json({ message: 'Added successfully' })
})


/**
 *  @desc Update a Services Location Pieces
 *  @route /api/services/Location-Pieces/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateLocationPiecesCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateLocationPieces(req.body);
    // if (error) {
    //     return res.status(400).json({ message: error.details[0].message });
    // }

    const rental = await LocationPieces.findById(req.params.id);
    if (!rental) {
        return res.status(404).json({ message: "Location Pieces not found" });
    }

    let imagePath;

    if (req.file) {
        imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
        await cloudinaryRemoveImage(rental.image.publicId);
    }

    const result = req.file ? await cloudinaryUploadImage(imagePath) : null;

    const updateFields = {};

    if (req.body.type) {
        updateFields.type = req.body.type;
    }
    if (req.body.details) {
        updateFields.details = req.body.details;
    }
    if (req.body.phone) {
        updateFields.phone = req.body.phone;
    }
    if (result) {
        updateFields.image = {
            url: result.secure_url,
            publicId: result.public_id,
        };
    }

    const upDateRental = await LocationPieces.findByIdAndUpdate(
        req.params.id,
        { $set: updateFields },
        { new: true }
    );

    if (upDateRental) {
        res.status(200).json({ message: 'Modified successfully' });
        if (req.file) {
            fs.unlinkSync(imagePath);
        }
    } else {
        res.status(404).json({ message: "Location Pieces not found . . !" });
    }
});


/**
 * 
 *  @desc Delete Services Location Pieces
 *  @route /api/services/Location-Pieces/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteLocationPiecesCrtl = asyncHandler(async (req, res) => {
    const locationPieces = await LocationPieces.findById(req.params.id);
    if (locationPieces) {
        await LocationPieces.findByIdAndDelete(req.params.id);
        await cloudinaryRemoveImage(locationPieces.image.publicId);
        res.status(200).json({ message: "location Pieces has been deleted" });
    } else {
        res.status(404).json({ message: "location Pieces not found . . !" });
    }
});


/**
 *  @desc The status changes to Executed
 *  @route /api/services/Location-Pieces/status/:id
 *  @method GET
 *  @access private ( only Admin )  
 */
const getStatusLocationPiecesCrtl = asyncHandler(async (req, res) => {
    const locationPieces = await LocationPieces.findById(req.params.id);
    if (!locationPieces) {
        return res.status(404).json({ message: "Rental not found" });
    }

    locationPieces.condition = !locationPieces.condition;
    await locationPieces.save();
    res.status(200).json(locationPieces);
})

module.exports = {
    getA11LocationPiecesCrtl, getCountLocationPiecesCrtl,
    createLocationPiecesCrtl, updateLocationPiecesCrtl, deleteLocationPiecesCrtl,
    getStatusLocationPiecesCrtl
}