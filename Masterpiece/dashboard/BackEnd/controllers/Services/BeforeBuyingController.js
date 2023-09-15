const asyncHandler = require('express-async-handler')
const { BeforeBuying, ValidateCreatedBeforeBuying, ValidateUpdateBeforeBuying } = require('../../models/Services/BeforeBuying')


/**
 *  @desc Get All Services Before Buying
 *  @route /api/services/before-buying
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11ABeforeBuyingCrtl = asyncHandler(async (req, res) => {
    const beforeBuying = await BeforeBuying.find().populate('user', ['-password'])
    res.status(200).json(beforeBuying)
})

/**
 *  @desc Get Count Before Buying
 *  @route /api/services/before-buying/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountBeforeBuyingCrtl = asyncHandler(async (req, res) => {
    const beforeBuying = await BeforeBuying.count()
    res.status(200).json(beforeBuying)
})


/**
 *  @desc Created Services Before Buying
 *  @route /api/services/before-buying/
 *  @method POST
 *  @access private ( only Admin )
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


/**
 *  @desc Update a Services Before Buying
 *  @route /api/services/before-buying/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateBeforeBuyingCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateBeforeBuying(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }

    const existingBeforeBuying = await BeforeBuying.findById(req.params.id)

    if (!existingBeforeBuying) {
        res.status(404).json({ message: "Before Buying not found . . !" })
    }

    if (req.body.type) {
        existingBeforeBuying.type = req.body.type;
    }
    if (req.body.vehicleCompany) {
        existingBeforeBuying.vehicleCompany = req.body.vehicleCompany;
    }
    if (req.body.modelVehicle) {
        existingBeforeBuying.modelVehicle = req.body.modelVehicle;
    }
    if (req.body.fuelType) {
        existingBeforeBuying.fuelType = req.body.fuelType;
    }
    if (req.body.phone) {
        existingBeforeBuying.phone = req.body.phone;
    }
    if (req.body.location) {
        existingBeforeBuying.location = req.body.location;
    }
    if (req.body.details) {
        existingBeforeBuying.details = req.body.details;
    }
    if (req.body.date) {
        existingBeforeBuying.date = req.body.date;
    }
    if (req.body.time) {
        existingBeforeBuying.time = req.body.time;
    }

    const updatedBeforeBuying = await existingBeforeBuying.save();

    res.status(200).json(updatedBeforeBuying);
});


/**
 * 
 *  @desc Delete Services Before Buying
 *  @route /api/services/before-buying/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteBeforeBuyingCrtl = asyncHandler(async (req, res) => {
    const beforeBuying = await BeforeBuying.findById(req.params.id)
    if (beforeBuying) {
        await BeforeBuying.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Before Buying has been delete" })
    } else {
        res.status(404).json({ message: "Before Buying not found . . !" })
    }
})


/**
 *  @desc The status changes to Executed 
 *  @route /api/services/before-buying/status/:id
 *  @method PUT
 *  @access private ( only Admin )  
 */
const getStatusBeforeBuyingCrtl = asyncHandler(async (req, res) => {
    const beforeBuying = await BeforeBuying.findById(req.params.id)
    if (!beforeBuying) {
        res.status(404).json({ message: "Before Buying not found " })
    }

    beforeBuying.condition = !beforeBuying.condition;
    await beforeBuying.save()
    res.status(200).json(beforeBuying)
})


module.exports = { getA11ABeforeBuyingCrtl, getCountBeforeBuyingCrtl, createBeforeBuyingCrtl, updateBeforeBuyingCrtl, deleteBeforeBuyingCrtl, getStatusBeforeBuyingCrtl }