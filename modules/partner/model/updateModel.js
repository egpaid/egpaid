const Partner = require('../schema/partnerSchema.js');
const updateModel = async( info ) => {
    try{
        const data = await Partner.findByIdAndUpdate( info.id ,  info , {new : true});
        if(!data){
            return ({
                success : false,
                status : "failed",
                message : "Partner not found"
            })
        }
        return ({
            success : true,
            success : "success",
            message : "partner update succesfully",
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
module.exports = updateModel;