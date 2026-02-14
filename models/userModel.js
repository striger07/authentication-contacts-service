const mongoose =require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a name"],
    },
    email:{
        type:String,
        required:[true,"please provide the email"],
        unique:[true,"Email already exist please try different one"]
    },
    password:{
        type:String,
        required:[true,"please provide the phone number"]
    }
},{
    timestamp:true,
});
module.exports=mongoose.model("User",userSchema);