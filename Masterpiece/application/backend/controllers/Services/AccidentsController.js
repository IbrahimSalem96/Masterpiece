const asyncHandler = require('express-async-handler')
const { Accidents, ValidateCreatedAccidents } = require('../../models/Services/Accidents')

/**
 *  @desc Created Services Accidents
 *  @route /api/services/accidents/
 *  @method POST
 *  @access private ( only User  )
 */
const createAccidentsCrtl = asyncHandler(async (req, res) => {
    const { error } = ValidateCreatedAccidents(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const accidents = new Accidents({
        type: req.body.type,
        requist: req.body.requist,
        vehicleCompany: req.body.vehicleCompany,
        modelVehicle: req.body.modelVehicle,
        fuelType: req.body.fuelType,
        phone: req.body.phone,
        location: req.body.location,
        details: req.body.details,
        user: req.user.id,
    })


    const result = await accidents.save()
    res.status(201).json(result)

})



module.exports = { createAccidentsCrtl }