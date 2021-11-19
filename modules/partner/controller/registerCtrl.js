const registerModel = require('../model/registerModel.js');
const registerCtrl = async( req , res ) => {
    const {mobile , password} = req.body;
    if(!mobile || !password){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : 'mobile , password required fields'
        });
}
const data = await registerModel(mobile , password);
return res.json(data)
}
module.exports = registerCtrl;