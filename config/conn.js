const mongoose = require("mongoose");

var DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log("Connection successfull")})
.catch((err) => console.log("database not connected " + err.message))
;