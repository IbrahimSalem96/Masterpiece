const express = require('express')
const router = express.Router()
 const { getAllMachinesPostCrtl } = require('../../controllers/shops/machinesControllers')

//   
router.route('/')
    .get(getAllMachinesPostCrtl)

module.exports = router
