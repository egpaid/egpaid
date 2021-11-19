const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

class Otp {


    async sentOtp(c_code , mobileNo){
      let response = false
      let data = await client.verify
            .services(process.env.serviceID)
            .verifications.create({
            to: c_code + mobileNo,
            channel: "sms",
            })

          return data;
      }



    async verify(c_code , mobileNo , code){
      const data = await client.verify
        .services(process.env.serviceID)
        .verificationChecks.create({
          to: c_code + mobileNo,
          code: code,
        });
        return data;
    };
}

const otp = new Otp();
module.exports = otp;