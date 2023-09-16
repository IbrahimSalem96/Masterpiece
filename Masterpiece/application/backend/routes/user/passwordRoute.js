const router = require("express").Router();
const { sendResetPasswordLinkCtrl, getResetPasswordLinkCtrl, resetPasswordCtrl } = require("../../controllers/User/passwordController");
const { verifyToken } = require('../../middlewares/verifyToken')

//api/password/reset-password-link
router.post("/reset-password-link", sendResetPasswordLinkCtrl);

//api/password/reset-password/:userId/:token
// router
//     .route("/reset-password/:userId/:token")
//     .get(getResetPasswordLinkCtrl)
//     .post(resetPasswordCtrl);

router.post("/reset-password/:id", verifyToken, resetPasswordCtrl)

module.exports = router;
