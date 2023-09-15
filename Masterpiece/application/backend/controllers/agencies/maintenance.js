const asyncHandler = require('express-async-handler')
const { Maintenance, ValidateCreatedMaintenance } = require('../../models/Agencies/Maintenance')

/**
 *  @desc Created Maintenance
 *  @route /api/maintenance/
 *  @method POST
 *  @access private ( only user )
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



module.exports = { createMaintenanceCrtl }