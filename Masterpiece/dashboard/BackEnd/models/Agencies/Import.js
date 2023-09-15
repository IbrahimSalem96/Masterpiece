const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const ImportAgenciesSchema = new Schema({
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
    nameSpareAndNumber: {
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
    details: {
        type: String,
        maxLength: 1024,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

}, {
    timestamps: true,
}
)


//Model Admin
const ImportAgencies = mongoose.model("Import_agencies", ImportAgenciesSchema)


//Validate Create Import Agencies
function ValidateCreatedImportAgencies(obj) {
    const Schema = Joi.object({
        vehicleCompany: Joi.string().min(2).max(200).trim().required(),
        modelVehicle: Joi.string().min(2).max(200).trim().required(),
        nameSpareAndNumber: Joi.string().min(2).max(200).trim().required(),
        phone: Joi.string().min(10).max(14).trim().required(),
        details: Joi.string().max(1024),
    })
    return Schema.validate(obj)
}


//Validate Create Import Agencies
function ValidateUpdateImportAgencies(obj) {
    const Schema = Joi.object({
        vehicleCompany: Joi.string().min(2).max(200).trim(),
        modelVehicle: Joi.string().min(2).max(200).trim(),
        nameSpareAndNumber: Joi.string().min(2).max(200).trim(),
        phone: Joi.string().min(10).max(14).trim(),
        details: Joi.string().max(1024),
    })
    return Schema.validate(obj)
}


module.exports = { ImportAgencies, ValidateCreatedImportAgencies, ValidateUpdateImportAgencies }