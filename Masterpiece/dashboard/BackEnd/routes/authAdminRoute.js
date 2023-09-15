const express = require('express')
const router = express.Router()
const { registerAdminCtr1, loginAdminCtrl } = require('../controllers/authAdminController')


//Create Admin
router.post('/createAccount', registerAdminCtr1)


//Login User
router.post('/login', loginAdminCtrl)


module.exports = router