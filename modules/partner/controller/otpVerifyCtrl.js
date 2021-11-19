const otpVerifyModel = require('../model/otpVerifyModel.js');
const otpVerifyCtrl = async( req , res ) => {
    const {mobile , code} = req.body;
    if(!mobile || !code){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : 'mobile and code is required to verify'
        });
}
const data = await otpVerifyModel(mobile , code);
return res.json(data)
}
module.exports = otpVerifyCtrl;