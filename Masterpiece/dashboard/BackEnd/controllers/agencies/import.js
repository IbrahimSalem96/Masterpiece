const asyncHandler = require('express-async-handler')
const { ImportAgencies, ValidateCreatedImportAgencies, ValidateUpdateImportAgencies } = require('../../models/Agencies/Import')


/**
 *  @desc Get all Import Agencies
 *  @route /api/import-agencies
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11ImportAgenciesCrtl = asyncHandler(async (req, res) => {
    const importAgencies = await ImportAgencies.find().populate("user", ["-password"])
    res.status(200).json(importAgencies)
})


/**
 *  @desc Get Import Agencies By Id 
 *  @route /api/import-agencies/:id
 *  @method GET
 *  @access private ( only Admin )  
 */
const getImportAgenciesByIdCrtl = asyncHandler(async (req, res) => {
    const importAgencies = await ImportAgencies.findById(req.params.id)
    res.status(200).json(importAgencies)
})



/**
 *  @desc Get Count Import Agencies
 *  @route /api/import-agencies/count
 *  @method GET
 *  @access private ( only Admin )  
 */
const getCountImportAgenciesCrtl = asyncHandler(async (req, res) => {
    const importAgencies = await ImportAgencies.count()
    res.status(200).json(importAgencies)
})


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



/**
 *  @desc Update a Import Agencies 
 *  @route /api/import-agencies/:id
 *  @method PUT
 *  @access private ( only Admin & user himselft )
 */
const updateImportAgenciesCrtl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateImportAgencies(req.body);
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message });
    //     return;
    // }

    const updatedFields = {};

    if (req.body.vehicleCompany) {
        updatedFields.vehicleCompany = req.body.vehicleCompany;
    }
    if (req.body.modelVehicle) {
        updatedFields.modelVehicle = req.body.modelVehicle;
    }
    if (req.body.nameSpareAndNumber) {
        updatedFields.nameSpareAndNumber = req.body.nameSpareAndNumber;
    }
    if (req.body.phone) {
        updatedFields.phone = req.body.phone;
    }
    if (req.body.details) {
        updatedFields.details = req.body.details;
    }

    const importAgencies = await ImportAgencies.findByIdAndUpdate(req.params.id, {
        $set: updatedFields
    }, { new: true });

    if (importAgencies) {
        res.status(200).json(importAgencies);
    } else {
        res.status(404).json({ message: "Import agencies not found . . !" });
    }
});




/**
 * 
 *  @desc Delete Import Agencies 
 *  @route /api/import-agencies/:id
 *  @method DELETE
 * @access private ( only Admin )  
 * 
 */
const deleteImportAgenciesCrtl = asyncHandler(async (req, res) => {
    const importAgencies = await ImportAgencies.findById(req.params.id)
    if (importAgencies) {
        await ImportAgencies.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Import agencies has been delete" })
    } else {
        res.status(404).json({ message: "Import agencies not found . . !" })
    }
})



module.exports = { getA11ImportAgenciesCrtl, getImportAgenciesByIdCrtl, getCountImportAgenciesCrtl, updateImportAgenciesCrtl, createImportAgenciesCrtl, deleteImportAgenciesCrtl }