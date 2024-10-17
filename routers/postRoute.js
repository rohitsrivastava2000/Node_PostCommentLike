const express=require('express');
const router=express.Router();

const {createPost,particularPost}=require('../controlers/postControler');


//Handling Routes
router.post('/post',createPost);
router.get('/post/id',particularPost);




//export
module.exports=router;