const asyncHandler = require('express-async-handler')
const { Accidents, ValidateCreatedAccidents, ValidateUpdateAccidents } = require('../../models/Services/Accidents')


/**
 *  @desc Get All Services Accidents
 *  @route /api/services/accidents
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11AccidentsCrtl = asyncHandler(async (req, res) => {
    const accidents = await Accidents.find().populate('user', ['-password'])
    res.status(200).json(accidents)
})

/**
 *  @desc Get Count Maintenance
 *  @route /api/services/accidents/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountAccidentsCrtl = asyncHandler(async (req, res) => {
    const accidents = await Accidents.count()
    res.status(200).json(accidents)
})


/**
 *  @desc Created Services Accidents
 *  @route /api/services/accidents/
 *  @method POST
 *  @access private ( only Admin  )
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


/**
 *  @desc Update a Services Accidents
 *  @route /api/services/accidents/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateAccidentsCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateAccidents(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }

    const existingAccident = await Accidents.findById(req.params.id)

    if (!existingAccident) {
        res.status(404).json({ message: "Accidents not found . . !" })
    }

    if (req.body.type) {
        existingAccident.type = req.body.type;
    }
    if (req.body.requist) {
        existingAccident.requist = req.body.requist;
    }
    if (req.body.vehicleCompany) {
        existingAccident.vehicleCompany = req.body.vehicleCompany;
    }
    if (req.body.modelVehicle) {
        existingAccident.modelVehicle = req.body.modelVehicle;
    }
    if (req.body.fuelType) {
        existingAccident.fuelType = req.body.fuelType;
    }
    if (req.body.phone) {
        existingAccident.phone = req.body.phone;
    }
    if (req.body.location) {
        existingAccident.location = req.body.location;
    }
    if (req.body.details) {
        existingAccident.details = req.body.details;
    }

    const updatedAccident = await existingAccident.save();

    res.status(200).json(updatedAccident);
});


/**
 * 
 *  @desc Delete Services Accidents
 *  @route /api/services/accidents/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteAccidentsCrtl = asyncHandler(async (req, res) => {
    const accidents = await Accidents.findById(req.params.id)
    if (accidents) {
        await Accidents.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Accidents has been delete" })
    } else {
        res.status(404).json({ message: "Accidents not found . . !" })
    }
})


/**
 *  @desc The status changes to Executed
 *  @route /api/services/accidents/status/:id
 *  @method PUT
 *  @access private ( only Admin )  
 */
const getStatusAccidentsCrtl = asyncHandler(async (req, res) => {
    const accidents = await Accidents.findById(req.params.id)
    if (!accidents) {
        res.status(404).json({ message: "Accidents not found " })
    }

    accidents.condition = !accidents.condition;
    await accidents.save()
    res.status(200).json(accidents)
})


module.exports = { getA11AccidentsCrtl, getCountAccidentsCrtl, createAccidentsCrtl, updateAccidentsCrtl, deleteAccidentsCrtl, getStatusAccidentsCrtl }