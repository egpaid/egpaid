const updateModel = require('../model/updateModel.js');
const updateCtrl = async( req , res ) => {
    const info = req.body;
    if(!info.id){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : `please send partner id and the other fields that are need to be update . the following fields can be update
            name , email , dob ,panNo , aadharNo , residentalAddress(eg , {address : '' , pin : '' , city : '' , district : '' , state : ''}),
            businessName , brandName , businessAddress(eg , {address : '' , pin : '' , city : '' , district : '' , state : ''}) , 
            gstNo , farmPanNo , tPinStatus , tPin , balance , mobileVerifyStatus , kycStatus , package , validity
            expiredDate , status`
        });
}
const data = await updateModel(info);
return res.json(data)
}
module.exports = updateCtrl;