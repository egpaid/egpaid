const Partner = require('../schema/partnerSchema.js');
var bcrypt = require('bcryptjs');
const accountIdGen = require('../services/accountIdGen.js');

const registerModel = async( mobile , password) => {
    try{
        const exist = await Partner.findOne({mobile : mobile});
        if(exist){
            return({
                success : false,
                'status' : 'failed',
                'message' : `partner alredy exist with monile no ${mobile}`
            })
        }

        var accountId = await accountIdGen();
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);        
        const new_partner = new Partner({mobile , password : hash , accountId});
        const data = await new_partner.save();
        const mydata = {
           _id : data._id ,  mobile : data.mobile , accountId : data.accountId
        };
        return ({
            success : true,
            status : "success",
            message : "partner created successfully",
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