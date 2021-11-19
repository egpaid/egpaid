const checkStatusModel = require('../model/checkStatusModel.js');

const checkStatusCtrl = async( req , res ) => {
    const {mobile} = req.body;
    if(!mobile){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : 'mobile required'
        });
}
const data = await checkStatusModel(mobile);
return res.json(data)
}

module.exports = checkStatusCtrl;