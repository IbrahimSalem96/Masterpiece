const mongoose = require("mongoose");

// Verification Token Schema
const bookCarsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    rental: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental'
    },
    date: {
        type: String,
    },

}, {
    timestamps: true,
});



// Model
const BookCars = mongoose.model("book_car", bookCarsSchema);

module.exports = { BookCars } 