const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../middlewares/verifyToken')
const validateObjectld = require('../middlewares/validateObjectld')




// route 
router.route('/')
    .get(verifyTokenAdmin, getAllBookCarsCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getCountBookCarstCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateBookCarsCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteBookCarsCrtl)



module.exports = router


