const express=require('express');
const router=express.Router();

//Adding controllers
const createLike=require('../controlers/likeControler');



//Add routers
router.post('/like',createLike);



//exports
module.exports=router;
