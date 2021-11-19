const Admin = require('../schema/adminSchema.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const registerModel = async( mobile , password , role ) => {
    try{
        const exist = await Admin.findOne({mobile : mobile});
        if(exist){
            var valid_password = await bcrypt.compareSync(password, exist.password);
            if(!valid_password){
                return({
                    success : false,
                    'status' : 'failed',
                    'message' : "Invalid crendentials"
                })
            }
            var token = jwt.sign({ mobile: exist.mobile }, process.env.JWTSECRET);
            var updated = await Admin.findByIdAndUpdate(exist._id , {token : token} , {new : true});
            const mydata = {
                _id : updated._id,
                mobile : updated.mobile,
                role : updated.role,
                token : updated.token
            }
            return({
                success : true,
                status : 'success',
                message : 'Admin login succesfully',
                data : mydata
            })
        }
        return ({
            success : false,
            status : "failed",
            message : "invlid credentials"
        })
    }catch(err){
        return({
            success : false,
            'status' : 'failed',
            'message' : err.message
        })
    }
}

module.exports = registerModel;