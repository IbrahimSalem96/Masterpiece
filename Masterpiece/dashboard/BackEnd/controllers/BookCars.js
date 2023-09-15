const asyncHandler = require('express-async-handler')
const { BookCars } = require('../models/BookCars')

/**-------------------------------------------------------------
 *  @desc Get all Book Cars
 *  @route /api/book-cars
 *  @method GET
 *  @access private ( only Admin)
---------------------------------------------------------------*/
const getAllBookCarsCrtl = asyncHandler(async (req, res) => {
    const bookCars = await BookCars.find()
    res.status(200).json(bookCars)
})


/**
 *  @desc Get Count Book Cars
 *  @route /api/book-cars/count
 *  @method GET
 *  @access private ( only Admin)
 */
const getCountBookCarstCrtl = asyncHandler(async (req, res) => {
    const bookCars = await BookCars.count()
    res.status(200).json(bookCars)
})


/**-------------------------------------------------------------
 *  @desc Delete a Book Cars
 *  @route /api/book-cars/:id
 *  @method DELETE
 *  @access private ( only Admin)
---------------------------------------------------------------*/
const deleteBookCarsCrtl = asyncHandler(async (req, res) => {
    const bookCars = await BookCars.findById(req.params.id)
    if (bookCars) {
        await BookCars.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: " Book Cars has been delete" })
    } else {
        res.status(404).json({ message: " Book Cars not found . . !" })
    }
})

module.exports = { getAllBookCarsCrtl, getCountBookCarstCrtl, deleteBookCarsCrtl }