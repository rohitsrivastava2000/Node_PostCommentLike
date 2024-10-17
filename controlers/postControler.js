const Post=require('../models/postSchema');

const createPost=async(req,res)=>{
    try {
        const {user,body}=req.body;

        const postInfo=new Post({user,body});
        const respo=await postInfo.save();

        res.status(200).json({respo});
    } catch (error) {
        console.log("Inernal Server Error");
        res.status(500).json({error:"Interna; Server Error"});
    }
}
const particularPost=async(req,res)=>{
    try {
        const data=req.body;
        
        console.log(data.post);
        const response=await Post.findById(data.post).populate("comments").populate("likes").exec();
        if(!response)
            res.status(400).json("Id not found");

        res.status(200).json({response});
    } catch (error) {
        console.log("Inernal Server Error");
        res.status(500).json({error:"Internal Server Error"});
    }
}
module.exports={createPost,particularPost};