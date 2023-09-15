const asyncHandler = require('express-async-handler')
const { Post } = require('../models/Post')
const { Accidents } = require('../models/Services/Accidents')
const { BeforeBuying } = require('../models/Services/BeforeBuying')
const { LocationPieces } = require('../models/Services/LocationPieces')
const { MaintenanceRequest } = require('../models/Services/MaintenanceRequest')
const { Rental } = require('../models/Services/Rental')


/**
 *  @desc Get Count Post  
 *  @route /api/chart/shops
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getChartShopsCrtl = asyncHandler(async (req, res) => {
    const Cars = await Post.find({ section: 'Cars' }).count()
    const Buses = await Post.find({ section: 'Buses' }).count()
    const Machines = await Post.find({ section: 'Machines' }).count()
    const Motorcycles = await Post.find({ section: 'Motorcycles' }).count()
    const Scrap = await Post.find({ section: 'Scrap' }).count()
    const SpareParts = await Post.find({ section: 'Spare Parts' }).count()
    const Trucks = await Post.find({ section: 'Trucks' }).count()

    res.status(200).json({ Cars, Buses, Machines, Motorcycles, Scrap, SpareParts, Trucks })
})



/**
 *  @desc Get Count services  
 *  @route /api/chart/services
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getChartServicesCrtl = asyncHandler(async (req, res) => {
    const accidents = await Accidents.find().count()
    const beforeBuying = await BeforeBuying.find().count()
    const locationPieces = await LocationPieces.find().count()
    const maintenanceRequest = await MaintenanceRequest.find().count()
    const rental = await Rental.find().count()

    res.status(200).json({ accidents, beforeBuying, locationPieces, maintenanceRequest, rental })
})



/**
 *  @desc Get Count Overall Performance  
 *  @route /api/chart/overallPerformance
 *  @method GET
 *  @access private ( only Admin )  
 */
module.exports.getChartOverallPerformanceCrtl = asyncHandler(async (req, res) => {
    const accidents = await Accidents.find().count()
    const beforeBuying = await BeforeBuying.find().count()
    const locationPieces = await LocationPieces.find().count()
    const maintenanceRequest = await MaintenanceRequest.find().count()
    const rental = await Rental.find().count()
    const Cars = await Post.find({ section: 'Cars' }).count()
    const Buses = await Post.find({ section: 'Buses' }).count()
    const Machines = await Post.find({ section: 'Machines' }).count()
    const Motorcycles = await Post.find({ section: 'Motorcycles' }).count()
    const Scrap = await Post.find({ section: 'Scrap' }).count()
    const SpareParts = await Post.find({ section: 'Spare Parts' }).count()
    const Trucks = await Post.find({ section: 'Trucks' }).count()

    res.status(200).json({
        Cars, Buses, Machines, Motorcycles, Scrap, SpareParts, Trucks, accidents,
        beforeBuying, locationPieces, maintenanceRequest, rental
    })
})
