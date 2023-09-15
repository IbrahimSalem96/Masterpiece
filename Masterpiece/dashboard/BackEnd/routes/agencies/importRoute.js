const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getA11ImportAgenciesCrtl, getImportAgenciesByIdCrtl, getCountImportAgenciesCrtl, updateImportAgenciesCrtl,
    createImportAgenciesCrtl, deleteImportAgenciesCrtl } = require('../../controllers/agencies/import')

// route 
router.route('/')
    .get(verifyTokenAdmin, getA11ImportAgenciesCrtl)
    .post(verifyTokenAdmin, createImportAgenciesCrtl)

router.route('/:id')
    .get(verifyTokenAdmin, getImportAgenciesByIdCrtl)

router.route('/count')
    .get(verifyTokenAdmin, getCountImportAgenciesCrtl)


router.route('/:id')
    .put(verifyTokenAdmin, validateObjectld, updateImportAgenciesCrtl)
    .delete(verifyTokenAdmin, validateObjectld, deleteImportAgenciesCrtl)



module.exports = router
