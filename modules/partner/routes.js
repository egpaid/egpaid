const express = require("express");
const loginCtrl = require("./controller/loginCtrl.js");
const registerCtrl = require("./controller/registerCtrl.js");
const updateCtrl = require("./controller/updateCtrl.js");
const router = express.Router();

router.post("/register" , registerCtrl);
router.post("/login" , loginCtrl);
router.post("/update" , updateCtrl);

module.exports = router;