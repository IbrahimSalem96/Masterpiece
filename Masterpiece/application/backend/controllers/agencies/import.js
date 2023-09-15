const asyncHandler = require('express-async-handler')
const { ImportAgencies, ValidateCreatedImportAgencies, ValidateUpdateImportAgencies } = require('../../models/Agencies/Import')



/**
 *  @desc Created Import Agencies
 *  @route /api/import-agencies/
 *  @method POST
 *  @access private ( only Admin & user himselft )
 */
const createImportAgenciesCrtl = asyncHandler(async (req, res) => {
    const { error } = ValidateCreatedImportAgencies(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const importAgencies = new ImportAgencies({
        vehicleCompany: req.body.vehicleCompany,
        modelVehicle: req.body.modelVehicle,
        nameSpareAndNumber: req.body.nameSpareAndNumber,
        phone: req.body.phone,
        details: req.body.details,
        user: req.user.id,
    })


    const result = await importAgencies.save()
    res.status(201).json(result)

})


module.exports = { createImportAgenciesCrtl }