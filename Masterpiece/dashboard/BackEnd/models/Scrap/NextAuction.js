const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const nextAuctionSchema = new Schema({
    scrapName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 500,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 14,
    },
    details: {
        type: String,
        trim: true,
        maxLength: 1024,
    },
    date: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    time: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    startingPrice: {
        type: Number,
        trim: true,
        required: true,
    },
    image: {
        type: Object,
        default: {
            url: "https://img.freepik.com/free-vector/funny-error-404-background-design_1167-219.jpg?w=2000",
            publicId: null
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    active: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true,
}
)


//Model Scrap Auction
const NextAuction = mongoose.model("next_auction", nextAuctionSchema)


//Validate Created Scrap Auction
function ValidateCreatedNextAuction(obj) {
    const Schema = Joi.object({
        scrapName: Joi.string().min(2).max(500).trim().required(),
        phone: Joi.string().min(10).max(14).required(),
        details: Joi.string().min(2).max(1024).trim().required(),
        startingPrice: Joi.number().required(),
        date: Joi.string().max(100).trim().required(),
        time: Joi.string().max(100).trim().required(),
    });
    return Schema.validate(obj);
}

//Validate Update Scrap Auction
function ValidateUpdateNextAuction(obj) {
    const Schema = Joi.object({
        scrapName: Joi.string().min(2).max(500).trim(),
        phone: Joi.string().min(10).max(14),
        details: Joi.string().min(2).max(1024).trim(),
        startingPrice: Joi.number(),
        date: Joi.string().max(100).trim(),
        time: Joi.string().max(100).trim(),
    });
    return Schema.validate(obj);
}



module.exports = { NextAuction, ValidateCreatedNextAuction, ValidateUpdateNextAuction }