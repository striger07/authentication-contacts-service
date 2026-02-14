const asyncHandler = require('express-async-handler');
const User=require("../models/userModel");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        res.status(400)
        throw new Error("please provide all the information");
    }
    const userAvailable=await User.findOne({email});
    if(userAvailable){
        res.status(409)
        throw new Error("email already taken please try a new one");
    }
    //if user not found we have to store it but before this 
    // we have to encrypt the password we have used bcrypt for encryption
    const hashedpassword=await bcrypt.hash(password,10);
    console.log("hashed password: ",hashedpassword);
    const user=await User.create({
        name,
        email,
        password:hashedpassword
    });
    console.log(`user created ${user}`);
    if(user){
        res.status(201).json({_id: user.id,_name:user.name});
    }
    else{
        res.status(404)
        throw new Error("email already taken please try a new one");
    }
});
const loginUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("provide email address and password");
    }
    const user=await User.findOne({email});//we have to verify if this is a valid user yaha pe findOne lena hai find se array return hota hai
    //now we have to check if the password the user has entered is correct or not
    if(user && (await bcrypt.compare(password,user.password))){
        //creating a accessToken
        const accessToken=jwt.sign({
            //these are payload or user information we are passing
            //HERE ACCESS_TOKEN_SECRET IS SIGNATURE VERIFICATION
            //ACCESS_TOKEN_SECRET KO TAGDA BANANA AANDU PANDU NAHI
            user:{
                name:user.name,
                email:user.email,
                id:user.id,
            },
        },process.env.ACCEESS_TOKEN_SECRET,{
            expiresIn:"5m" });
        
        res.status(200).json({accessToken});
    }
    else{
        res.status(401);
        throw new Error("email or password is not valid");
    }
});
const currentUser = asyncHandler(async (req,res)=>{

    // req.user middleware se aaya (token se)
    const user = await User.findById(req.user.id).select("-password");

    if(!user){
        res.status(404);
        throw new Error("User not found");
    }

    res.status(200).json(user);
});



module.exports={registerUser,loginUser,currentUser}