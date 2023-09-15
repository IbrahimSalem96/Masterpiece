const asyncHandler = require('express-async-handler')
const { ServiceProvider, ValidateUpdateServiceProvider, ValidateServiceProviderInsert } = require('../models/ServiceProvider')


/**-------------------------------------------------------------
 *  @desc Get all Service Provider
 *  @route /api/service-provider
 *  @method GET
 *  @access private ( only Admin )   
---------------------------------------------------------------*/
const getServiceProvider = asyncHandler(async (req, res) => {
    const serviceProvider = await ServiceProvider.find()
    res.status(200).json(serviceProvider)
})


/**-------------------------------------------------------------
 *  @desc Get all Service Provider  Count
 *  @route /api/service-provider/count
 *  @method GET
 *  @access private ( only Admin )   
---------------------------------------------------------------*/
const getCountServiceProvider = asyncHandler(async (req, res) => {
    const serviceProvider = await ServiceProvider.count()
    res.status(200).json(serviceProvider)
})



/**-------------------------------------------------------------
 *  @desc Created New Service Provider 
 *  @route /api/service-provider
 *  @method POST
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const createServiceProvider = asyncHandler(async (req, res) => {
    // const { error } = ValidateServiceProviderInsert(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // } 

    const serviceProvider = new ServiceProvider({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        bio: req.body.bio,
        price: req.body.price,
        location: req.body.location,
    })

    try {
        const result = await serviceProvider.save()
        res.status(201).json(result)
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.phone === 1) {
            res.status(400).json({ message: 'This number already exists' })
        } else {
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }


})



/**-------------------------------------------------------------
 *  @desc Update a Service Provider  
 *  @route /api/service-provider/:id
 *  @method PUT
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const updateserviceProvider = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateServiceProvider(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }  

    try {
        const updateFields = {};

        if (req.body.username) updateFields.username = req.body.username;
        if (req.body.email) updateFields.email = req.body.email;
        if (req.body.phone) updateFields.phone = req.body.phone;
        if (req.body.bio) updateFields.bio = req.body.bio;
        if (req.body.price) updateFields.price = req.body.price;
        if (req.body.location) updateFields.location = req.body.location;

        const serviceProvider = await ServiceProvider.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updateFields },
            { new: true }
        );

        if (serviceProvider) {
            res.status(200).json(serviceProvider);
        } else {
            res.status(404).json({ message: 'Service provider not found' });
        }
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.phone === 1) {
            res.status(400).json({ message: 'This number already exists' });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});



/**-------------------------------------------------------------
 *  @desc Delete a Service Provider 
 *  @route /api/service-provider/:id
 *  @method DELETE
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const deleteServiceProvider = asyncHandler(async (req, res) => {
    const serviceProvider = await ServiceProvider.findById(req.params.id);
    if (serviceProvider) {
        await serviceProvider.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Service Provider has been deleted" });
    } else {
        res.status(404).json({ message: "Service Provider not found!" });
    }
})




module.exports = { getServiceProvider, getCountServiceProvider, createServiceProvider, updateserviceProvider, deleteServiceProvider }