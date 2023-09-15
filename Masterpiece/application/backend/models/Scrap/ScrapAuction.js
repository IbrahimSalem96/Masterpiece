// const mongoose = require('mongoose')
// const Joi = require('joi')
// const jwt = require('jsonwebtoken')


// const Schema = mongoose.Schema


// const SellAndBaySchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 2,
//         maxlength: 100,
//     },
//     description: {
//         type: Number,
//         minLength: 10,
//         trim: true,
//         maxLength: 14,
//         default: "No description"
//     },
//     price: {
//         type: String,
//         trim: true,
//         maxLength: 14,
//     },
//     price: {
//         type: Number,
//         trim: true,
//         required: true,
//     },
//     image: {
//         type: Object,
//         default: {
//             url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
//             publicId: null
//         }
//     },

// }, {
//     timestamps: true,
// }
// )


// //Model Scrap Auction
// const SellAndBay = mongoose.model("SellAndBay", SellAndBaySchema)


// //Validate Created Scrap Auction
// function ValidateCreatedSellAndBay(obj) {
//     const Schema = Joi.object({
//         username: Joi.string().min(2).max(100).trim().required(),
//         phone: Joi.string().min(10).max(14).trim().required(),
//         carModule: Joi.string().min(2).trim().required(),
//         service: Joi.string().valid('Internal', 'External').required()
//     })
//     return Schema.validate(obj)
// }


// //Validate Update Scrap Auction
// function ValidateUpdateSellAndBay(obj) {
//     const Schema = Joi.object({
//         username: Joi.string().min(2).max(100).trim(),
//         phone: Joi.string().min(10).max(14).trim(),
//         carModule: Joi.string().min(2).trim(),
//         service: Joi.string().valid('Internal', 'External')
//     })
//     return Schema.validate(obj)
// }


// module.exports = { SellAndBay, ValidateCreatedSellAndBay, ValidateUpdateSellAndBay }