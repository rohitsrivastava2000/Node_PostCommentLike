const Comment=require('../models/commentSchema');
const Post=require('../models/postSchema');

const creatComment=async(req,res)=>{
    try {
        const {post,user,body}=req.body;

        const commentDetail=new Comment({post,user,body});
        const response=await commentDetail.save();

        //res.status(200).json("Comment Save Successfully in Comment component");

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:response._id}},{new:true}).populate("comments").exec();
        
        res.status(200).json({YourComments:response});



    } catch (error) {
        console.log("Inernal Server Error");
        res.status(500).json({error:"Interna; Server Error"});
    }
}
module.exports=creatComment;