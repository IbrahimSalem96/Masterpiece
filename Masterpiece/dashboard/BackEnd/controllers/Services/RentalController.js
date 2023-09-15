const asyncHandler = require('express-async-handler')
const { Rental, ValidateCreatedRental, ValidateUpdateRental } = require('../../models/Services/Rental')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')


/**
 *  @desc Get All Services Rental
 *  @route /api/services/rental
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11RentalCrtl = asyncHandler(async (req, res) => {
    const rental = await Rental.find().populate('user', ['-password'])
    res.status(200).json(rental)
})

/**
 *  @desc Get Count Rental
 *  @route /api/services/rental/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountRentalCrtl = asyncHandler(async (req, res) => {
    const rental = await Rental.count()
    res.status(200).json(rental)
})


/**
 *  @desc Created Services Rental
 *  @route /api/services/rental
 *  @method POST
 *  @access private ( only Admin  )
 */
const createRentalCrtl = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: "no file provided" })
    }

    const { error } = ValidateCreatedRental(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const imagePath = path.join(__dirname, `../../images/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath)

    const rental = new Rental({
        vehicleCompany: req.body.vehicleCompany,
        nameVehicle: req.body.nameVehicle,
        image: {
            url: result.secure_url,
            publicId: result.public_id
        },
        kilometres: req.body.kilometres,
        fuelType: req.body.fuelType,
        phone: req.body.phone,
        location: req.body.location,
        priceOneDay: req.body.priceOneDay,
        user: req.user.id
    })

    await rental.save()
    fs.unlinkSync(imagePath)
    res.status(201).json({ message: 'Added successfully' })
})


/**
 *  @desc Update a Services Rental
 *  @route /api/services/rental/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateRentalCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateRental(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    //     return;
    // }

    const rental = await Rental.findById(req.params.id);
    if (!rental) {
        res.status(404).json({ message: "Rental not found" });
        return;
    }

    let imagePath;

    if (req.file) {
        imagePath = path.join(__dirname, `../../images/${req.file.filename}`);
        await cloudinaryRemoveImage(rental.image.publicId);
    }

    const result = req.file ? await cloudinaryUploadImage(imagePath) : null;

    const updateFields = {};

    if (req.body.vehicleCompany) {
        updateFields.vehicleCompany = req.body.vehicleCompany;
    }
    if (req.body.nameVehicle) {
        updateFields.nameVehicle = req.body.nameVehicle;
    }
    if (req.body.kilometres) {
        updateFields.kilometres = req.body.kilometres;
    }
    if (req.body.fuelType) {
        updateFields.fuelType = req.body.fuelType;
    }
    if (req.body.phone) {
        updateFields.phone = req.body.phone;
    }
    if (req.body.location) {
        updateFields.location = req.body.location;
    }
    if (req.body.priceOneDay) {
        updateFields.priceOneDay = req.body.priceOneDay;
    }
    if (result) {
        updateFields.image = {
            url: result.secure_url,
            publicId: result.public_id,
        };
    }

    const upDateRental = await Rental.findByIdAndUpdate(
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
        res.status(404).json({ message: "Rental not found . . !" });
    }
});



/**
 *  @desc Delete Services Rental
 *  @route /api/services/rental/:id
 *  @method DELETE
 * @access private ( only Admin )  
 */
const deleteRentalCrtl = asyncHandler(async (req, res) => {
    const rental = await Rental.findById(req.params.id);
    if (rental) {
        await Rental.findByIdAndDelete(req.params.id);
        await cloudinaryRemoveImage(rental.image.publicId);
        res.status(200).json({ message: "Rental has been deleted" });
    } else {
        res.status(404).json({ message: "Rental not found . . !" });
    }
});


/**
 *  @desc The status changes to Executed
 *  @route /api/services/rental/status/:id
 *  @method GET
 *  @access private ( only Admin )  
 */
const getStatusRentalCrtl = asyncHandler(async (req, res) => {
    const rental = await Rental.findById(req.params.id)
    if (!rental) {
        res.status(404).json({ message: "Rental not found " })
    }

    if (rental.condition === true) {
        rental.condition = false
        await rental.save()
        res.status(200).json(rental)
    } else {
        rental.condition = true
        await rental.save()
        res.status(200).json(rental)
    }
})


module.exports = {
    getA11RentalCrtl, getCountRentalCrtl,
    createRentalCrtl, updateRentalCrtl, deleteRentalCrtl, getStatusRentalCrtl
}