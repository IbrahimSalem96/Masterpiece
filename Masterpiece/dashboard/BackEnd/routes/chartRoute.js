const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../middlewares/verifyToken')
const { getChartShopsCrtl, getChartServicesCrtl, getChartOverallPerformanceCrtl } = require('../controllers/chart')


router.route('/shops')
    .get(verifyTokenAdmin, getChartShopsCrtl)


router.route('/services')
    .get(verifyTokenAdmin, getChartServicesCrtl)


router.route('/overallPerformance')
    .get(verifyTokenAdmin, getChartOverallPerformanceCrtl)


module.exports = router

