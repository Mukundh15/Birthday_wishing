if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const Admin=require("./Models/adminModel");
const app=express();

mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(`Connection with database Failed due to ${err}`);
})

app.get("/",async(req,res)=>{
    const name="Mukundh";
    const email="mukundh@gmail.com";
    const password="Mukundh15";
    const NewPassword=await bcrypt.hash(password,parseInt(process.env.SALTROUNDS));
    let admin=new Admin({name,email,password:NewPassword});
    admin.save();
    console.log("Admin added");
})

app.listen(8080,()=>{
    console.log("The app is running...");
})