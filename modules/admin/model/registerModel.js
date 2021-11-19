const Admin = require('../schema/adminSchema.js');
var bcrypt = require('bcryptjs');

const registerModel = async( mobile , password , role ) => {
    try{
        const exist = await Admin.findOne({mobile : mobile});
        if(exist){
            return({
                success : false,
                'status' : 'failed',
                'message' : `Admin alredy exist with monile no ${mobile}`
            })
        }
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);        
        const new_admin = new Admin({mobile , password : hash , role});
        const data = await new_admin.save();
        const mydata = {
           _id : data._id ,  mobile : data.mobile  , role : data.role
        };
        return ({
            success : true,
            status : "success",
            message : "admin created successfully",
            data : mydata
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