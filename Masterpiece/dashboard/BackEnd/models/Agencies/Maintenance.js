const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const MaintenanceSchema = new Schema({
    vehicleCompany: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 200,
    },
    modelVehicle: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 200,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 14,
    },
    DateSelection: {
        type: String,
        required: true,
    },
    TimeSelection: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    details: {
        type: String,
        maxLength: 1024,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true,
}
)


//Model Admin
const Maintenance = mongoose.model("maintenance_agencies", MaintenanceSchema)


//Validate Create Import Agencies
function ValidateCreatedMaintenance(obj) {
    const Schema = Joi.object({
        vehicleCompany: Joi.string().min(2).max(200).trim().required(),
        modelVehicle: Joi.string().min(2).max(200).trim().required(),
        phone: Joi.string().min(10).max(14).trim().required(),
        DateSelection: Joi.string().required(),
        TimeSelection: Joi.string().max(100).trim().required(),
        details: Joi.string().max(1024),
    })
    return Schema.validate(obj)
}


//Validate Create Import Agencies
function ValidateUpdateMaintenance(obj) {
    const Schema = Joi.object({
        vehicleCompany: Joi.string().min(2).max(200).trim(),
        modelVehicle: Joi.string().min(2).max(200).trim(),
        phone: Joi.string().min(10).max(14).trim(),
        DateSelection: Joi.date(),
        TimeSelection: Joi.string().max(100).trim(),
        details: Joi.string().max(1024),
    })
    return Schema.validate(obj)
}


module.exports = { Maintenance, ValidateCreatedMaintenance, ValidateUpdateMaintenance }