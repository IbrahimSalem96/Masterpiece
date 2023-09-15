const mongoose = require('mongoose')
const Joi = require('joi')


const Schema = mongoose.Schema


const ServiceProviderSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        minLength: 10,
        trim: true,
        maxLength: 14,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    location: {
        type: String,
        required: true,
        enum: ['Amman', 'Irbid', 'Zarqa', 'AlSalt', 'Mafraq', "Ajloun", 'Karak', "Ma'an", 'AlTafilah', 'Jerash', 'Aqaba']
    }

}, {
    timestamps: true,
}
)


//Model Service Provider
const ServiceProvider = mongoose.model("Service_Provider", ServiceProviderSchema)

// ServiceProvider.insertMany([
//     {
//         username: "User 1",
//         email: "user1@gmail.com",
//         phone: 123456789,
//         bio: "I am an experienced car mechanic with a passion for solving automotive problems.",
//         price: 30,
//         location: "Amman"
//     },
//     {
//         username: "User 2",
//         email: "user2@gmail.com",
//         phone: 987654321,
//         bio: "I provide professional plumbing services and have years of experience in the field.",
//         price: 25,
//         location: "Irbid"
//     },
//     {
//         username: "User 3",
//         email: "user3@gmail.com",
//         phone: 234567890,
//         bio: "As an electrician, I specialize in handling electrical installations and repairs.",
//         price: 40,
//         location: "Zarqa"
//     },
//     {
//         username: "User 4",
//         email: "user4@gmail.com",
//         phone: 876543210,
//         bio: "I am a skilled carpenter with expertise in crafting furniture and wooden structures.",
//         price: 35,
//         location: "AlSalt"
//     },
//     {
//         username: "User 5",
//         email: "user5@gmail.com",
//         phone: 345678901,
//         bio: "I offer professional painting services with an eye for detail and quality.",
//         price: 20,
//         location: "Mafraq"
//     },
//     {
//         username: "User 6",
//         email: "user6@gmail.com",
//         phone: 765432109,
//         bio: "I am a certified personal trainer dedicated to helping clients achieve their fitness goals.",
//         price: 50,
//         location: "Ajloun"
//     },
//     {
//         username: "User 7",
//         email: "user7@gmail.com",
//         phone: 456789012,
//         bio: "I am a talented graphic designer with a flair for creativity and innovation.",
//         price: 45,
//         location: "Karak"
//     },
//     {
//         username: "User 8",
//         email: "user8@gmail.com",
//         phone: 654321098,
//         bio: "I am a professional chef with a passion for creating delicious and exquisite dishes.",
//         price: 60,
//         location: "Ma'an"
//     },
//     {
//         username: "User 9",
//         email: "user9@gmail.com",
//         phone: 567890123,
//         bio: "I am a licensed plumber with expertise in handling all types of plumbing issues.",
//         price: 25,
//         location: "AlTafilah"
//     },
//     {
//         username: "User 10",
//         email: "user10@gmail.com",
//         phone: 543210987,
//         bio: "I provide professional IT support services and have experience with various technologies.",
//         price: 30,
//         location: "Amman"
//     },
//     {
//         username: "User 11",
//         email: "user11@gmail.com",
//         phone: 678901234,
//         bio: "I am a skilled electrician specializing in electrical repairs and installations.",
//         price: 40,
//         location: "Irbid"
//     },
//     {
//         username: "User 12",
//         email: "user12@gmail.com",
//         phone: 432109876,
//         bio: "I offer high-quality web development services using modern technologies.",
//         price: 55,
//         location: "Zarqa"
//     },
//     {
//         username: "User 13",
//         email: "user13@gmail.com",
//         phone: 789012345,
//         bio: "I am a professional photographer capturing moments that last a lifetime.",
//         price: 50,
//         location: "AlSalt"
//     },
//     {
//         username: "User 14",
//         email: "user14@gmail.com",
//         phone: 321098765,
//         bio: "I am a talented interior designer creating spaces that are both functional and beautiful.",
//         price: 65,
//         location: "Mafraq"
//     },
//     {
//         username: "User 15",
//         email: "user15@gmail.com",
//         phone: 890123456,
//         bio: "I am an experienced car mechanic providing efficient and reliable car repair services.",
//         price: 35,
//         location: "Ajloun"
//     }
// ])



// ServiceProvider.insertMany([
//     {
//         username: "Modern Single Sofa",
//         email: "A modern and comfortable single sofa for your ",
//         bio: "living room.",
//         phone: "0777771777",
//         price: 200,
//         location: "Amman"
//     },
//     {
//         username: "Modern Single Sofa",
//         email: "A modern and comfortable single sofa for your ",
//         bio: "living room.",
//         phone: "0777772777",
//         price: 200,
//         location: "Irbid"
//     },
//     {
//         username: "Modern Single Sofa",
//         email: "A modern and comfortable single sofa for your ",
//         bio: "living room.",
//         phone: "0777777773",
//         price: 200,
//         location: "Irbid"
//     },
//     {
//         username: "Modern Single Sofa",
//         email: "A modern and comfortable single sofa for your ",
//         bio: "living room.",
//         phone: "0777777757",
//         price: 200,
//         location: "Mafraq"
//     },
//     {
//         username: "Modern Single Sofa",
//         email: "A modern and comfortable single sofa for your ",
//         bio: "living room.",
//         phone: "0777776777",
//         price: 200,
//         location: "AlSalt"
//     },
// ])

//Validate Service Provider  Insert
function ValidateServiceProviderInsert(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim().required(),
        email: Joi.string().trim(),
        phone: Joi.string().trim().min(10).max(14).required(),
        bio: Joi.string().trim().required(),
        price: Joi.required(),
        location: Joi.string().valid('Amman', 'Irbid', 'Zarqa', 'AlSalt', 'Mafraq', "Ajloun", 'Karaak', "Ma'an", 'AlTafilah').required()
    })
    return Schema.validate(obj)
}


//Validate Update Service Provider
function ValidateUpdateServiceProvider(obj) {
    const Schema = Joi.object({
        username: Joi.string().trim(),
        email: Joi.string().trim(),
        phone: Joi.string().trim().min(10).max(14),
        bio: Joi.string()
    })
    return Schema.validate(obj)
}




module.exports = { ServiceProvider, ValidateUpdateServiceProvider, ValidateServiceProviderInsert }