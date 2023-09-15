const asyncHandler = require('express-async-handler')
const { Rental } = require('../../models/Services/Rental')
const { BookCars } = require('../../models/BookCars')


/**
 *  @desc Get All Services Rental
 *  @route /api/services/rental
 *  @method GET
 *  @access private ( only Admin )  
 */
const getA11RentalCrtl = asyncHandler(async (req, res) => {
    const rental = await Rental.find()
    res.status(200).json(rental)
})


/**
 *  @desc Created Services Rental
 *  @route /api/services/rental
 *  @method POST
 *  @access private ( only Admin  )
 */
const createRentalCrtl = asyncHandler(async (req, res) => {
    const rental = await Rental.findById(req.params.id)
    if (!rental) {
        res.status(404).json({ message: "Not found" })
    }

    const bookCars = new BookCars({
        user: req.user.id,
        rental: req.params.id,
        date: req.body.date,
    })


    const result = await bookCars.save()
    res.status(201).json(result)
})


module.exports = { getA11RentalCrtl, createRentalCrtl }