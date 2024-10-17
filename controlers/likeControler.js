const Like=require('../models/likeSchema');
const Post=require('../models/postSchema');

const createLike=async (req,res)=>{
    try {
        const {post,user}=req.body;

        const likeInfo=new Like({post,user});

        const response=await likeInfo.save();
        
        //also add in the post section
        const updatedLikes=await Post.findByIdAndUpdate(post,{$push:{likes:response._id}}).populate('likes').exec();
        
        res.status(200).json({updatedLikes});
    } catch (error) {
        console.log("Inernal Server Error in like");
        res.status(500).json({error:"Interna; Server Error"});
    }

}
module.exports=createLike;