const registerModel = require('../model/registerModel.js');
const registerCtrl = async( req , res ) => {
    const {mobile , password , role} = req.body;
    if(!mobile || !password || !role){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : 'mobile , password and role required fieds'
        });
}
const data = await registerModel(mobile , password , role);
return res.json(data)
}
module.exports = registerCtrl;