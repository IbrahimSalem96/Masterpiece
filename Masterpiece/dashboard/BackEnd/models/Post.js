const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const PostSchema = new Schema({
    nameProduct: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    location: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    kilometres: {
        type: String,
        minLength: 1,
        maxLength: 20,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 1024,
    },
    price: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100,
    },
    // image: {
    //     type: Object,
    //     default: {
    //         url: [
    //             "https://media.istockphoto.com/id/1336490790/vector/light-motion-background-with-car-silhouette.jpg?s=612x612&w=0&k=20&c=xddjafOI8bBMNC9RorzCoSeamF4EDt92T_m7DJgWlJk=",
    //             "https://media.istockphoto.com/id/1336490790/vector/light-motion-background-with-car-silhouette.jpg?s=612x612&w=0&k=20&c=xddjafOI8bBMNC9RorzCoSeamF4EDt92T_m7DJgWlJk=",
    //             "https://media.istockphoto.com/id/1336490790/vector/light-motion-background-with-car-silhouette.jpg?s=612x612&w=0&k=20&c=xddjafOI8bBMNC9RorzCoSeamF4EDt92T_m7DJgWlJk=",
    //             "https://media.istockphoto.com/id/1336490790/vector/light-motion-background-with-car-silhouette.jpg?s=612x612&w=0&k=20&c=xddjafOI8bBMNC9RorzCoSeamF4EDt92T_m7DJgWlJk="
    //         ],
    //         publicId: null
    //     }
    // },
    image: {
        type: Object,
        default: {
            url: "https://media.istockphoto.com/id/1336490790/vector/light-motion-background-with-car-silhouette.jpg?s=612x612&w=0&k=20&c=xddjafOI8bBMNC9RorzCoSeamF4EDt92T_m7DJgWlJk=",
            publicId: null
        }
    },
    transmissionType: {
        type: String,
        maxlength: 100,
        enum: ['Manual', 'Automatic']
    },
    fuelType: {
        type: String,
        maxlength: 100,
        enum: ['Petrol', 'Diesel']
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 14,
    },
    section: {
        type: String,
        required: true,
        enum: ['Cars', 'Motorcycles', 'Buses', 'Trucks', 'Machines', 'Spare Parts', 'Scrap']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: true,
}
)


//Model Post
const Post = mongoose.model("Post", PostSchema)


//Create New Post
function ValidateCreatedPost(obj) {
    const Schema = Joi.object({
        nameProduct: Joi.string().min(2).max(100).trim().required(),
        location: Joi.string().min(2).max(100).trim().required(),
        kilometres: Joi.string().min(1).max(20).trim().required(),
        description: Joi.string().min(1).max(1024).trim().required(),
        transmissionType: Joi.string().valid('Manual', 'Automatic').required(),
        fuelType: Joi.string().valid('Petrol', 'Diesel').required(),
        phone: Joi.string().min(10).max(14).trim().required(),
        price: Joi.string().min(1).max(100).trim().required(),
        section: Joi.string().valid('Cars', 'Motorcycles', 'Buses', 'Trucks', 'Machines', 'Spare Parts', 'Scrap').required(),
    })
    return Schema.validate(obj)
}

//Validate Update User
function ValidateUpdatePost(obj) {
    const Schema = Joi.object({
        nameProduct: Joi.string().min(2).max(100).trim(),
        location: Joi.string().min(2).max(100).trim(),
        kilometres: Joi.string().min(1).max(20).trim(),
        description: Joi.string().min(1).max(1024).trim(),
        transmissionType: Joi.string().valid('Manual', 'Automatic'),
        fuelType: Joi.string().valid('Petrol', 'Diesel'),
        phone: Joi.string().min(10).max(14).trim(),
        price: Joi.string().min(1).max(100).trim(),
        section: Joi.string().valid('Cars', 'Motorcycles', 'Buses', 'Trucks', 'Machines', 'Spare Parts', 'Scrap'),
    })
    return Schema.validate(obj)
}



module.exports = { Post, ValidateCreatedPost, ValidateUpdatePost }