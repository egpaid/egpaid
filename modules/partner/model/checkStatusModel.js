const Partner = require('../schema/partnerSchema.js');
const Otp = require('../services/otp.js');


const checkStatusModel = async( mobile ) => {
    try{
        const data = await Partner.findOne({mobile : mobile});
        if(!data){
            return ({
                success : false,
                status : "failed",
                message : "no such mobile no registered"
            })
        }
        if(!data.mobileVerified){
            const otp = await Otp.sentOtp("+91" , data.mobile);
            if(otp.status !== 'pending'){
                return ({
                    success: false,
                    message : "please try later! otp service not working"
                })
            }
            return ({
                success : true,
                message : "please verify your mobile no !we have sent you an otp with your register mobile no",
            })
        }

        if(data.kycStatus == "notSubmit" && !data.mobileVerified){
            return ({
                message : "mobile not verified and kyc not submit please submit kyc form before login",
                mobileVerified : data.mobileVerified,
                kycStatus : data.kycStatus,
                data
            })
        }

        if(data.kycStatus == "notSubmit" && data.mobileVerified){
            return ({
                message : "kyc not submit please submit kyc form before login",
                mobileVerified : data.mobileVerified,
                kycStatus : data.kycStatus,
                data
            })
        }

        return ({
            message : "everything is verified now you can login",
            canLogin : true,
            kycStatus : data.kycStatus ,
            mobileVerified : data.mobileVerified,
            data
        })
    }catch(err){
        return({
            success : false,
            'status' : 'failed',
            'message' : err.message
        })
    }
}

module.exports = checkStatusModel;