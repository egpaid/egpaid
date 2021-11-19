const Partner = require('../schema/partnerSchema.js');

const accountId = async() => {
    var accountId = 1000000000000;
    const a = await Partner.find();
    if(a.length > 0){
        accountId = a[a.length - 1].accountId + 1;
    }
    return accountId;
}

module.exports = accountId;