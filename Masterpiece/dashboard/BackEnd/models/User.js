const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 14,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    profilePhoto: {
        type: Object,
        default: {
            url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            publicId: null
        }
    },
    bio: {
        type: String,
        maxlength: 500,
    },
    address: {
        type: String,
        maxlength: 500,
    },
}, {
    timestamps: true,
}
)

//Generate Auth Token 
UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
}


//Model User
const User = mongoose.model("User", UserSchema)


// User.insertMany([
//     {
//         username: "User 1",
//         email: "user1@gmail.com",
//         password: 123456789
//     },
//     {
//         username: "User 2",
//         email: "user2@gmail.com",
//         password: 123456790
//     },
//     {
//         username: "User 3",
//         email: "user3@gmail.com",
//         password: 123456791
//     },
//     {
//         username: "User 4",
//         email: "user4@gmail.com",
//         password: 123456792
//     },
//     {
//         username: "User 5",
//         email: "user5@gmail.com",
//         password: 123456793
//     },
//     {
//         username: "User 6",
//         email: "user6@gmail.com",
//         password: 123456794
//     },
//     {
//         username: "User 7",
//         email: "user7@gmail.com",
//         password: 123456795
//     },
//     {
//         username: "User 8",
//         email: "user8@gmail.com",
//         password: 123456796
//     },
//     {
//         username: "User 9",
//         email: "user9@gmail.com",
//         password: 123456797
//     },
//     {
//         username: "User 10",
//         email: "user10@gmail.com",
//         password: 123456798
//     },
//     {
//         username: "User 11",
//         email: "user11@gmail.com",
//         password: 123456799
//     },
//     {
//         username: "User 12",
//         email: "user12@gmail.com",
//         password: 123456800
//     },
//     {
//         username: "User 13",
//         email: "user13@gmail.com",
//         password: 123456801
//     },
//     {
//         username: "User 14",
//         email: "user14@gmail.com",
//         password: 123456802
//     },
//     {
//         username: "User 15",
//         email: "user15@gmail.com",
//         password: 123456803
//     },
//     {
//         username: "User 16",
//         email: "user16@gmail.com",
//         password: 123456804
//     },
//     {
//         username: "User 17",
//         email: "user17@gmail.com",
//         password: 123456805
//     },
//     {
//         username: "User 18",
//         email: "user18@gmail.com",
//         password: 123456806
//     },
//     {
//         username: "User 19",
//         email: "user19@gmail.com",
//         password: 123456807
//     },
//     {
//         username: "User 20",
//         email: "user20@gmail.com",
//         password: 123456808
//     }
// ])

//Validate Register User


function ValidateRegisterUser(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim().required(),
        email: Joi.string().min(5).max(100).trim().required().email(),
        password: Joi.string().min(8).trim().required(),
    })
    return Schema.validate(obj)
}


//Validate login User
function ValidateLoginUser(obj) {
    const Schema = Joi.object({
        email: Joi.string().min(5).max(100).trim().required().email(),
        password: Joi.string().min(8).trim().required(),
    })
    return Schema.validate(obj)
}


//Validate Update User
function ValidateUpdateUser(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim(),
        password: Joi.string().min(8).trim(),
        bio: Joi.string().max(500),
        phone: Joi.string().trim().min(10).max(14),
        Address: Joi.string().max(500),
    })
    return Schema.validate(obj)
}

// Validate Email
function validateEmail(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
    });
    return schema.validate(obj);
}

// Validate New Password
function validateNewPassword(obj) {
    const schema = Joi.object({
        password: Joi.required(),
    });
    return schema.validate(obj);
}

module.exports = { User, ValidateRegisterUser, ValidateLoginUser, ValidateUpdateUser, validateEmail, validateNewPassword }