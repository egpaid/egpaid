const express = require("express");
const registerCtrl = require("./controller/registerCtrl.js");
const loginCtrl = require("./controller/loginCtrl.js");
const router = express.Router();

router.post("/register" , registerCtrl);
router.post("/login" , loginCtrl);

module.exports = router;