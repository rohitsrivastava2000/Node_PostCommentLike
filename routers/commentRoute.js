const express=require('express');
const router=express.Router();

const creatComment=require('../controlers/commentControler');





//Route declaration
router.post('/comment',creatComment);



//exports
module.exports=router;
