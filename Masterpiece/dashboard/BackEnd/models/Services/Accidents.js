const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const accidentsSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true,
        enum: ['Cars', 'Motorcycles', 'Buses', 'Trucks']
    },
    requist: {
        type: String,
        required: true,
        trim: true,
        enum: ['Flat Tire', 'Towing Service', 'Engine Heat', 'Battery Jump', 'Key lock', 'Other service']
    },
    vehicleCompany: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    modelVehicle: {
        type: String,
        trim: true,
        required: true,
        maxLength: 100,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    fuelType: {
        type: String,
        maxLength: 100,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        minLength: 10,
        maxLength: 14,
    },
    location: {
        type: String,
        trim: true,
        required: true,
        maxLength: 2000,
    },
    details: {
        type: String,
        trim: true,
        maxLength: 2000,
    },
    condition: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true,
}
)


//Model Accidents
const Accidents = mongoose.model("accidents", accidentsSchema)


//Validate Created Accidents
function ValidateCreatedAccidents(obj) {
    const Schema = Joi.object({
        type: Joi.string().valid('Cars', 'Motorcycles', 'Buses', 'Trucks').trim().required(),
        requist: Joi.string().valid('Flat Tire', 'Towing Service', 'Engine Heat', 'Battery Jump', 'Key lock', 'Other service').trim().required(),
        vehicleCompany: Joi.string().trim().max(100).required(),
        modelVehicle: Joi.string().trim().max(100).required(),
        fuelType: Joi.string().max(100).trim(),
        phone: Joi.string().min(10).trim().max(14).required(),
        location: Joi.string().max(2000).trim().required(),
        details: Joi.string().max(2000).trim().required(),
    });
    return Schema.validate(obj);
}

//Validate Update Accidents
function ValidateUpdateAccidents(obj) {
    const Schema = Joi.object({
        type: Joi.string().valid('Cars', 'Motorcycles', 'Buses', 'Trucks').trim(),
        requist: Joi.string().valid('Flat Tire', 'Towing Service', 'Engine Heat', 'Battery Jump', 'Key lock', 'Other service').trim(),
        vehicleCompany: Joi.string().trim().max(100),
        modelVehicle: Joi.string().trim().max(100),
        fuelType: Joi.string().max(100).trim(),
        phone: Joi.string().min(10).trim().max(14),
        location: Joi.string().max(2000).trim(),
        details: Joi.string().max(2000).trim(),
    });
    return Schema.validate(obj);
}



module.exports = { Accidents, ValidateCreatedAccidents, ValidateUpdateAccidents }