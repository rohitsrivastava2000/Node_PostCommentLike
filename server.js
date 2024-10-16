const express =require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Server Start at PORT ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("APP is running");
})