const Partner = require('../schema/partnerSchema.js');
const Otp = require('../services/Otp.js');
const otpVerifyModel = async( mobile , code ) => {
    try{
        const response = await Otp.verify("+91" , mobile , code);
        if(response.status !== "approved"){
            return ({
                success: false,
                status : "failed",
                message : "Invalid code"
            })
        }
        if(response.valid){
            const data = await Partner.findOneAndUpdate({mobile : mobile} , {mobileVerified : true} , {new : true})
            return ({
                success: true,
                status : "success",
                message : "valid code",
                mobileVerified : data.mobileVerified,
                kycStatus : data.kycStatus,
                data
            })
        }
        return ({
            success: false,
            status : "failed",
            message : "Invalid code"
        })
    }catch(err){
        return({
            success : false,
            'status' : 'failed',
            'message' : err.message
        })
    }
}
module.exports = otpVerifyModel;