const asyncHandler = require('express-async-handler')
const { BeforeBuying, ValidateCreatedBeforeBuying } = require('../../models/Services/BeforeBuying')



/**
 *  @desc Created Services Before Buying
 *  @route /api/services/before-buying/
 *  @method POST
 *  @access private ( only User )
 */
const createBeforeBuyingCrtl = asyncHandler(async (req, res) => {
    const { error } = ValidateCreatedBeforeBuying(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const beforeBuying = new BeforeBuying({
        type: req.body.type,
        vehicleCompany: req.body.vehicleCompany,
        modelVehicle: req.body.modelVehicle,
        fuelType: req.body.fuelType,
        phone: req.body.phone,
        location: req.body.location,
        details: req.body.details,
        date: req.body.date,
        time: req.body.time,
        user: req.user.id,
    })


    const result = await beforeBuying.save()
    res.status(201).json(result)

})



module.exports = { createBeforeBuyingCrtl }