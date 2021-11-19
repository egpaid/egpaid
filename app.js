const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
require("./config/conn.js");
const app = express();
const adminRoutes = require("./modules/admin/routes.js");
const partnerRoutes = require("./modules/partner/routes.js");
app.use(express.json());

app.use("/admin" , adminRoutes);
app.use("/partner" , partnerRoutes);


app.listen(PORT , ()=> {
    console.log("server is running at " , PORT);
})