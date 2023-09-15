const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../middlewares/verifyToken')
const validateObjectld = require('../middlewares/validateObjectld')
const { getAllBookCarsCrtl, getCountBookCarstCrtl, updateBookCarsCrtl, deleteBookCarsCrtl } = require('../controllers/BookCars')


// route 
router.route('/')
    .get(verifyTokenAdmin, getAllBookCarsCrtl)

router.route('/count')
    .get(verifyTokenAdmin, getCountBookCarstCrtl)

router.route('/:id')
    .delete(verifyTokenAdmin, validateObjectld, deleteBookCarsCrtl)



module.exports = router
