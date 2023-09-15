const express = require('express')
const router = express.Router()
const { verifyToken } = require('../../middlewares/verifyToken')
const { createImportAgenciesCrtl } = require('../../controllers/agencies/import')

// route 
router.route('/')
    .post(verifyToken, createImportAgenciesCrtl)



module.exports = router
