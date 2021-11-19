const loginModel = require('../model/loginModel.js');
const loginCtrl = async( req , res ) => {
    const {mobile , password} = req.body;
    if(!mobile || !password){
        return res.json({
            success : false,
            'status' : 'failed',
            'message' : 'mobile , password required fieds'
        });
}
const data = await loginModel(mobile , password);
return res.json(data)
}
module.exports = loginCtrl;