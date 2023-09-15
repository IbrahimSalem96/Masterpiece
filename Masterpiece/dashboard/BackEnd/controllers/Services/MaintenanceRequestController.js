const asyncHandler = require('express-async-handler')
const { MaintenanceRequest, ValidateCreatedMaintenanceRequest, ValidateUpdateMaintenanceRequest } = require('../../models/Services/MaintenanceRequest')


/**
 *  @desc Get All Services Maintenance Request
 *  @route /api/services/maintenance-request
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11MaintenanceRequestCrtl = asyncHandler(async (req, res) => {
    const maintenanceRequest = await MaintenanceRequest.find().populate('user', ['-password'])
    res.status(200).json(maintenanceRequest)
})

/**
 *  @desc Get Count Maintenance Request
 *  @route /api/services/maintenance-request/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountMaintenanceRequestCrtl = asyncHandler(async (req, res) => {
    const maintenanceRequest = await MaintenanceRequest.count()
    res.status(200).json(maintenanceRequest)
})


/**
 *  @desc Created Services Maintenance Request
 *  @route /api/services/maintenance-request
 *  @method POST
 *  @access private ( only Admin  )
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


/**
 *  @desc Update a Services Maintenance Request
 *  @route /api/services/maintenance-request/:id
 *  @method PUT
 *  @access private ( only Admin   )
 */
const updateMaintenanceRequestCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateMaintenanceRequest(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }

    const existingMaintenanceRequest = await MaintenanceRequest.findById(req.params.id)

    if (!existingMaintenanceRequest) {
        res.status(404).json({ message: "Maintenance Request not found . . !" })
    }

    if (req.body.type) {
        existingMaintenanceRequest.type = req.body.type;
    }
    if (req.body.requist) {
        existingMaintenanceRequest.requist = req.body.requist;
    }
    if (req.body.vehicleCompany) {
        existingMaintenanceRequest.vehicleCompany = req.body.vehicleCompany;
    }
    if (req.body.modelVehicle) {
        existingMaintenanceRequest.modelVehicle = req.body.modelVehicle;
    }
    if (req.body.fuelType) {
        existingMaintenanceRequest.fuelType = req.body.fuelType;
    }
    if (req.body.phone) {
        existingMaintenanceRequest.phone = req.body.phone;
    }
    if (req.body.location) {
        existingMaintenanceRequest.location = req.body.location;
    }
    if (req.body.date) {
        existingMaintenanceRequest.date = req.body.date;
    }
    if (req.body.time) {
        existingMaintenanceRequest.time = req.body.time;
    }
    if (req.body.details) {
        existingMaintenanceRequest.details = req.body.details;
    }

    const updatedMaintenanceRequest = await existingMaintenanceRequest.save();

    res.status(200).json(updatedMaintenanceRequest);
});



/**
 * 
 *  @desc Delete Services Maintenance Request
 *  @route /api/services/maintenance-request/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteMaintenanceRequestCrtl = asyncHandler(async (req, res) => {
    const maintenanceRequest = await MaintenanceRequest.findById(req.params.id)
    if (maintenanceRequest) {
        await MaintenanceRequest.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Maintenance Request has been delete" })
    } else {
        res.status(404).json({ message: "Maintenance Request not found . . !" })
    }
})


/**
 *  @desc The status changes to Executed
 *  @route /api/services/maintenance-request/status/:id
 *  @method PUT
 *  @access private ( only Admin )  
 */
const getStatusMaintenanceRequestCrtl = asyncHandler(async (req, res) => {
    const maintenanceRequest = await MaintenanceRequest.findById(req.params.id)
    if (!maintenanceRequest) {
        res.status(404).json({ message: "Maintenance Request not found " })
    }

    maintenanceRequest.condition = !maintenanceRequest.condition;
    await maintenanceRequest.save()
    res.status(200).json(maintenanceRequest)
})


module.exports = { getA11MaintenanceRequestCrtl, getCountMaintenanceRequestCrtl, createMaintenanceRequestCrtl, updateMaintenanceRequestCrtl, deleteMaintenanceRequestCrtl, getStatusMaintenanceRequestCrtl }