const Partner = require('../schema/partnerSchema.js');
const kycStatusModel = async( mobile , status ) => {
    try{
        const data = await Partner.findOneAndUpdate({mobile : mobile} , {kycStatus : status} , {new : true})
        if(!data) { 
            return ({
                success : false,
                status : "failed",
                message : "mobile not registered"
            })
        }
        return ({
            success : true,
            status : "success",
            message : "kycStatus updated succesfully",
            kycStatu : data.kycStatus,
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
module.exports = kycStatusModel;