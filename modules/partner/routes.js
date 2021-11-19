const express = require("express");
const checkStatusCtrl = require("./controller/checkStatusCtrl.js");
const loginCtrl = require("./controller/loginCtrl.js");
const registerCtrl = require("./controller/registerCtrl.js");
const updateCtrl = require("./controller/updateCtrl.js");
const otpVerifyCtrl = require('./controller/otpVerifyCtrl');
const kycStatus = require('./controller/kycStatusCtlr.js');
const router = express.Router();

router.post("/register" , registerCtrl);
router.post("/login" , loginCtrl);
router.post("/update" , updateCtrl);
router.post("/check_status" , checkStatusCtrl);
router.post("/otp_verify" , otpVerifyCtrl);
router.post("/update_kyc_status" , kycStatus);

module.exports = router;