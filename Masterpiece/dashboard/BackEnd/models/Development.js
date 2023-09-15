const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const DevelopmentSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    phone: {
        type: Number,
        required: true,
        minLength: 10,
        trim: true,
        maxLength: 14,
    },
    carModule: {
        type: String,
        trim: true,
        maxLength: 14,
    },
    service: {
        type: String,
        required: true,
        enum: ['Internal', 'External']
    }

}, {
    timestamps: true,
}
)


//Model Development
const Development = mongoose.model("Development", DevelopmentSchema)


//Validate Insert Development
function ValidateInsertDevelopment(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim().required(),
        phone: Joi.string().min(10).max(14).trim().required(),
        carModule: Joi.string().min(2).trim().required(),
        service: Joi.string().valid('Internal', 'External').required()
    })
    return Schema.validate(obj)
}


//Validate Update Admin
function ValidateUpdateDevelopment(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim(),
        phone: Joi.string().min(10).max(14).trim(),
        carModule: Joi.string().min(2).trim(),
        service: Joi.string().valid('Internal', 'External')
    })
    return Schema.validate(obj)
}


module.exports = { Development, ValidateInsertDevelopment, ValidateUpdateDevelopment }