const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const rentalSchema = new Schema({
    vehicleCompany: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    nameVehicle: {
        type: String,
        trim: true,
        required: true,
        maxLength: 100,
    },
    image: {
        type: Object,
        default: {
            url: String,
            publicId: null
        },
    },
    kilometres: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
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
    priceOneDay: {
        type: String,
        trim: true,
        maxLength: 50,
        required: true,
    },
    condition: {
        type: Boolean,
        default: false
    },
    bookDate: {
        type: String,
        required: true,
        default: "0000-01-01"
    },

}, {
    timestamps: true,
}
)


//Model Rental
const Rental = mongoose.model("rental", rentalSchema)


//Validate Created Rental
function ValidateCreatedRental(obj) {
    const Schema = Joi.object({
        vehicleCompany: Joi.string().max(100).trim().required(),
        nameVehicle: Joi.string().max(100).trim().required(),
        kilometres: Joi.string().trim().max(20).required(),
        fuelType: Joi.string().max(100).trim(),
        phone: Joi.string().min(10).max(14).trim().required(),
        location: Joi.string().max(2000).trim().required(),
        priceOneDay: Joi.string().max(50).trim().required(),
        // bookDate: Joi.date().iso().required(),
    });
    return Schema.validate(obj);
}

//Validate Update Rental
function ValidateUpdateRental(obj) {
    const Schema = Joi.object({
        vehicleCompany: Joi.string().max(100).trim(),
        nameVehicle: Joi.string().max(100).trim(),
        kilometres: Joi.string().trim().max(20),
        fuelType: Joi.string().max(100).trim(),
        phone: Joi.string().min(10).max(14).trim(),
        location: Joi.string().max(2000).trim(),
        priceOneDay: Joi.string().max(50).trim(),
        // bookDate: Joi.date().iso()
    });
    return Schema.validate(obj);
}



module.exports = { Rental, ValidateCreatedRental, ValidateUpdateRental }