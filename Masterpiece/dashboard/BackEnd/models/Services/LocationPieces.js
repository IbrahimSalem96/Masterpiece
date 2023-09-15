const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const locationPiecesSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true,
        enum: ['Cars', 'Motorcycles', 'Buses', 'Trucks', 'Machines']
    },
    details: {
        type: String,
        trim: true,
        maxLength: 2000,
    },
    image: {
        type: Object,
        default: {
            url: String,
            publicId: null
        },
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        minLength: 10,
        maxLength: 14,
    },
    condition: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: true,
}
)


//Model Location Pieces
const LocationPieces = mongoose.model("location_pieces", locationPiecesSchema)


//Validate Created location Pieces
function ValidateCreatedLocationPieces(obj) {
    const Schema = Joi.object({
        type: Joi.string().valid('Cars', 'Motorcycles', 'Buses', 'Trucks', 'Machines').trim().required(),
        phone: Joi.string().min(10).trim().max(14).required(),
        details: Joi.string().max(2000).trim().required(),
    });
    return Schema.validate(obj);
}

//Validate Update location Pieces
function ValidateUpdateLocationPieces(obj) {
    const Schema = Joi.object({
        type: Joi.string().valid('Cars', 'Motorcycles', 'Buses', 'Trucks', 'Machines').trim(),
        phone: Joi.string().min(10).trim().max(14),
        details: Joi.string().max(2000).trim(),
    });
    return Schema.validate(obj);
}



module.exports = { LocationPieces, ValidateCreatedLocationPieces, ValidateUpdateLocationPieces }