const asyncHandler = require('express-async-handler')
const { Development, ValidateInsertDevelopment, ValidateUpdateDevelopment } = require('../../models/Development')
/**-------------------------------------------------------------
 *  @desc Get all Development Car
 *  @route /api/development
 *  @method GET
 *  @access private ( only Admin )   
---------------------------------------------------------------*/
const getDevelopmentCtrl = asyncHandler(async (req, res) => {
    const development = await Development.find()
    res.status(200).json(development)
})


/**-------------------------------------------------------------
 *  @desc Get Count  Development Car
 *  @route /api/development/count
 *  @method GET
 *  @access private ( only Admin )   
---------------------------------------------------------------*/
const getCountDevelopmentCtrl = asyncHandler(async (req, res) => {
    const externalCount = await Development.find({ service: 'External' }).count()
    const internalCount = await Development.find({ service: 'Internal' }).count()
    res.status(200).json({ externalCount, internalCount })
})


/**-------------------------------------------------------------
 *  @desc Created New Service Provider 
 *  @route /api/development
 *  @method POST
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const createDevelopmentCtrl = asyncHandler(async (req, res) => {
    const { error } = ValidateInsertDevelopment(req.body)
    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    const development = new Development({
        username: req.body.username,
        phone: req.body.phone,
        carModule: req.body.carModule,
        service: req.body.service,
    })

    const result = await development.save()
    res.status(201).json(result)

})




/**-------------------------------------------------------------
 *  @desc Update a development Request
 *  @route /api/development/:id
 *  @method PUT
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const updateDevelopmentCtrl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateDevelopment(req.body);
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message });
    //     return;
    // }

    const updatedFields = {};

    if (req.body.username) {
        updatedFields.username = req.body.username;
    }
    if (req.body.phone) {
        updatedFields.phone = req.body.phone;
    }
    if (req.body.carModule) {
        updatedFields.carModule = req.body.carModule;
    }
    if (req.body.service) {
        updatedFields.service = req.body.service;
    }

    const development = await Development.findByIdAndUpdate(req.params.id, {
        $set: updatedFields
    }, { new: true });

    if (development) {
        res.status(200).json(development);
    } else {
        res.status(404).json({ message: "Development User not found . . !" });
    }
});



/**-------------------------------------------------------------
 *  @desc Delete a development Request
 *  @route /api/development/:id
 *  @method DELETE
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const deleteDevelopmentCtrl = asyncHandler(async (req, res) => {
    const development = await Development.findById(req.params.id);
    if (development) {
        await development.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Development User has been deleted" });
    } else {
        res.status(404).json({ message: "Development User not found!" });
    }
})




module.exports = { getDevelopmentCtrl, getCountDevelopmentCtrl, createDevelopmentCtrl, updateDevelopmentCtrl, deleteDevelopmentCtrl }