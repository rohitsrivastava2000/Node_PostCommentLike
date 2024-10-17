const mongoose=require('mongoose');

const commentSchem=new mongoose.Schema({
    post:{
        type:mongoose.Schema.ObjectId,
        ref:"Post" 
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },


})
module.exports=mongoose.model('Comment',commentSchem);