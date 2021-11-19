const mongoose = require("mongoose");

const partner = mongoose.Schema({
    mobile : {
        type : String,
        unique : true,
        minLength : 10,
        maxLength : 10,
        required : true
    },

    password : {
        type : String,
        required  : true
    },

    accountId : {
        type : Number,
        default : 1000000000000
    },

    name : {
        type : String
    },
    
    email : {
        type : String,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },

    phoneNo : {
        type : String,
        minLength : 10,
        maxLength : 10
    },

    dob : {
        type : Date
    },

    panNo : {
        type : String
    },

    aadharNo : {
        type : String
    },

    residentalAddress : {
        address : {
            type : String
        },
        pin : {
            type : String
        },
        city : {
            type : String
        },
        district : {
            type : String
        },
        state : {
            type : String
        }
    },

    businessName : {
        type : String
    },

    brandName : {
        type : String
    },

    businessAddress : {
        address : {
            type : String
        },
        pin : {
            type : String
        },
        city : {
            type : String
        },
        district : {
            type : String
        },
        state : {
            type : String
        }
    },

    gstNo : {
        type : String
    },

    farmPanNo : {
        type : String
    },

    tPinStatus : {
        type : String
    },

    tPin : {
        type : String
    },

    balance : {
        type : String
    },

    mobileVerifyStatus : {
        type : String
    },

    kycStatus : {
        type : String
    },

    package : {
        type : String
    },

    validity : {
        type : String
    },

    expiredDate : {
        type : Date
    },

    status : {
        type : String
    },
    

    token : {
        type : String
    }
} , {timestamps: true})


const Partner = mongoose.model( "partner" , partner );

module.exports = Partner;

