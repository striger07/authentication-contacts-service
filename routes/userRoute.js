const express=require('express');
const validateToken=require('../middleware/validateToken');
const router=express.Router();
const {registerUser,loginUser,currentUser}=require('../controllers/usercontroller')
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/current',validateToken,currentUser)
module.exports=router