const express =require('express');
const app=express();
require('dotenv').config();
const db=require('./connections/dbConnection');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Server Start at PORT ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("APP is running");
})


//Connect with router
const commentDetail=require('./routers/commentRoute');
app.use('/commentdetail',commentDetail);

const postDetail=require('./routers/postRoute');
app.use('/postdetail',postDetail);
app.use('/find',postDetail);

const likeDetail=require('./routers/likeRoute');
app.use('/likedetail',likeDetail);

