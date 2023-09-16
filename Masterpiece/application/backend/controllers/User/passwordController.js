const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs')
const { User, validateEmail, validateNewPassword } = require("../../models/User");
const VerificationToken = require("../../models/VerificationToken");
const crypto = require("crypto");
const sendEmail = require("../../utils/sendEmail");


/** 
 * @desc    Send Reset Password Link
 * @route   /api/password/reset-password-link
 * @method  POST
 * @access  public
*/
module.exports.sendResetPasswordLinkCtrl = asyncHandler(async (req, res) => {
    const { error } = validateEmail(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ message: "User with given email does not exist!" })
    }

    let verificationToken = await VerificationToken.findOne({ userId: user._id })
    if (!verificationToken) {
        verificationToken = new VerificationToken({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        });
        await verificationToken.save();
    }

    const link = `${process.env.CLIENT_DOMAIN}resetPassword/${user._id}/${verificationToken.token}`;

    const htmlTemplate = `<a href="${link}">Click here to reset your password</a>`;

    await sendEmail(user.email, "Reset Password", htmlTemplate);

    res.status(200).json({
        message: "Password reset link sent to your email, Please check your inbox"
    })
})



/** 
 * @desc    Get Reset Password Link
 * @route   /api/password/reset-password/:userId/:token
 * @method  GET
 * @access  public
*/
module.exports.getResetPasswordLinkCtrl = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(400).json({ message: "invalid link" })
    }

    const verificationToken = await VerificationToken.findOne({
        userId: user._id,
        token: req.params.token,
    });
    if (!verificationToken) {
        return res.status(400).json({ message: "invalid link" })
    }

    res.status(200).json({ message: "Valid url" })
})



/** 
 * @desc    Reset Password
 * @route   /api/password/reset-password/:id
 * @method  POST
 * @access  public
*/
module.exports.resetPasswordCtrl = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully " })
});
