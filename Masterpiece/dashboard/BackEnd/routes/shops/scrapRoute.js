const express = require('express')
const router = express.Router()
const validateObjectld = require('../../middlewares/validateObjectld')
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { getAllScrapPostCrtl, getScrapCountPostCrtl, deletePostCrtl } = require('../../controllers/shops/scrapControllers')


router.route('/')
    .get(verifyTokenAdmin, getAllScrapPostCrtl)


router.route('/count')
    .get(verifyTokenAdmin, getScrapCountPostCrtl)


router.route('/:id')
    .delete(validateObjectld, verifyTokenAdmin, deletePostCrtl)


module.exports = router
