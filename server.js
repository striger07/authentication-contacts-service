const express=require('express');
const errorHandle = require('./middleware/errorHandler');
const dotenv=require("dotenv").config();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGOURL)
.then(()=>console.log("mongoconnected successfully"))
.catch((err)=>console.log("error connecting mongo"));
const app=express();
app.use(express.json()); //middleware
app.use("/api/contacts",require('./routes/contactRoute'));//middleware
app.use('/api/users',require('./routes/userRoute'));//middleware for authorization
app.use(errorHandle);
const port=process.env.PORT || 5001;
app.listen(port,()=>console.log(`server running on ${port}`));
