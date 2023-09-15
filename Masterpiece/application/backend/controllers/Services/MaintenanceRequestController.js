const asyncHandler = require('express-async-handler')
const { MaintenanceRequest, ValidateCreatedMaintenanceRequest } = require('../../models/Services/MaintenanceRequest')


/**
 *  @desc Created Services Maintenance Request
 *  @route /api/services/maintenance-request
 *  @method POST
 *  @access private ( only User  )
 */
const createMaintenanceRequestCrtl = asyncHandler(async (req, res) => {
    const { error } = ValidateCreatedMaintenanceRequest(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const maintenanceRequest = new MaintenanceRequest({
        type: req.body.type,
        requist: req.body.requist,
        vehicleCompany: req.body.vehicleCompany,
        modelVehicle: req.body.modelVehicle,
        fuelType: req.body.fuelType,
        phone: req.body.phone,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        details: req.body.details,
        user: req.user.id,
    })

    const result = await maintenanceRequest.save()
    res.status(201).json(result)

})


module.exports = { createMaintenanceRequestCrtl }