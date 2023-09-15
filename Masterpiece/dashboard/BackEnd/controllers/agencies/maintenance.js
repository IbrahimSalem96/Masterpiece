const asyncHandler = require('express-async-handler')
const { Maintenance, ValidateCreatedMaintenance, ValidateUpdateMaintenance } = require('../../models/Agencies/Maintenance')


/**
 *  @desc Get All Maintenance
 *  @route /api/maintenance
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11MaintenanceCrtl = asyncHandler(async (req, res) => {
    const maintenance = await Maintenance.find().populate('user', ['-password'])
    res.status(200).json(maintenance)
})

/**
 *  @desc Get Count Maintenance
 *  @route /api/maintenance/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountMaintenanceCrtl = asyncHandler(async (req, res) => {
    const maintenance = await Maintenance.count()
    res.status(200).json(maintenance)
})


/**
 *  @desc Created Maintenance
 *  @route /api/maintenance/
 *  @method POST
 *  @access private ( only Admin & user himselft )
 */
const createMaintenanceCrtl = asyncHandler(async (req, res) => {
    const { error } = ValidateCreatedMaintenance(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const maintenance = new Maintenance({
        vehicleCompany: req.body.vehicleCompany,
        modelVehicle: req.body.modelVehicle,
        phone: req.body.phone,
        DateSelection: req.body.DateSelection,
        TimeSelection: req.body.TimeSelection,
        details: req.body.details,
        user: req.user.id,
    })


    const result = await maintenance.save()
    res.status(201).json(result)

})



/**
 *  @desc Update a Maintenance
 *  @route /api/maintenance/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateMaintenanceCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateMaintenance(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }

    const existingMaintenance = await Maintenance.findById(req.params.id);

    if (!existingMaintenance) {
        return res.status(404).json({ message: "Maintenance not found . . !" });
    }

    const updatedFields = {};

    if (req.body.vehicleCompany) {
        updatedFields.vehicleCompany = req.body.vehicleCompany;
    }

    if (req.body.modelVehicle) {
        updatedFields.modelVehicle = req.body.modelVehicle;
    }

    if (req.body.phone) {
        updatedFields.phone = req.body.phone;
    }

    if (req.body.DateSelection) {
        updatedFields.DateSelection = req.body.DateSelection;
    }

    if (req.body.TimeSelection) {
        updatedFields.TimeSelection = req.body.TimeSelection;
    }

    const updatedMaintenance = await Maintenance.findByIdAndUpdate(req.params.id, {
        $set: updatedFields
    }, { new: true });

    res.status(200).json(updatedMaintenance);
});



/**
 * 
 *  @desc Delete Maintenance
 *  @route /api/maintenance/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteMaintenanceCrtl = asyncHandler(async (req, res) => {
    const maintenance = await Maintenance.findById(req.params.id)
    if (maintenance) {
        await Maintenance.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Maintenance has been delete" })
    } else {
        res.status(404).json({ message: "Maintenance not found . . !" })
    }
})



module.exports = { getA11MaintenanceCrtl, getCountMaintenanceCrtl, createMaintenanceCrtl, updateMaintenanceCrtl, deleteMaintenanceCrtl }