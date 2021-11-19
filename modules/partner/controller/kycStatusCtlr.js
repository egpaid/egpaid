const kycStatusModel = require('../model/kycStatusModel.js');
const kycStatusCtrl = async( req , res ) => {
    const {mobile , status} = req.body;
    if(!mobile || !status){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : 'mobile and status required'
        });
}
const data = await kycStatusModel(mobile , status);
return res.json(data)
}
module.exports = kycStatusCtrl;