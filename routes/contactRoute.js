const express=require('express');
const router=express.Router();
const {getContacts,newContacts,updateContacts,getspecificContacts,deleteContacts}= require('../controllers/controller');

router.route("/").get(getContacts)
.post(newContacts);
router.route('/:id').get(getspecificContacts)
.put(updateContacts)
.delete(deleteContacts);

module.exports=router