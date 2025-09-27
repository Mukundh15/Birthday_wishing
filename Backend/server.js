if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express=require("express");
const app=express();
const port=process.env.PORT;
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcrypt");
const User=require("./Models/userModel");
const Admin=require("./Models/adminModel");
const session=require('express-session');
const MongoStore=require('connect-mongo');

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DBURL}),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    }
}));

mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(`Connection with database Failed due to ${err}`);
})

app.post("/Birthday/Start",async(req,res)=>{
    let {name}=req.body;
    let user=await User.findOne({name});
    if(!user) return res.status(401).send("User Not Found");
    const today=new Date();
    if(user.birthdayDate.getDate()===today.getDate() && user.birthdayDate.getMonth()===today.getMonth()){
        req.session.name=name;
        return res.status(200).send("User Found and Birthday Today");
    }else{
        return res.status(400).send("User Found But Not Birthday");
    }
})

app.get("/Birthday/wishing",async(req,res)=>{
    let name=req.session.name;
    let user=await User.findOne({name});
    if(user){
        res.status(200).send(user);
    }
})

app.post("/Birthday/AdminLogin",async(req,res)=>{
    let {email,password}=req.body;
    let admin=await Admin.findOne({email});
    if(!admin) return res.status(401).send("Admin Not Found");
    let match=await bcrypt.compare(password,admin.password);
    if(!match) return res.status(401).send("Admin Details Wrong");
    req.session.admin=admin.name;
    return res.status(200).send("Admin Logged In");
})

app.get("/Birthday/admin",async(req,res)=>{
    const admin=req.session.admin;
    if(admin){
        return res.status(200).send(admin);
    }
    return res.status(400).send("Admin Not Found");
})

app.get("/Birthday/admin/user",async(req,res)=>{
    const today=new Date();
    const users=await User.find({$expr: {$and: [
        { $eq: [{ $dayOfMonth: "$birthdayDate" }, today.getDate()] },
        { $eq: [{ $month: "$birthdayDate" }, today.getMonth() + 1] }
    ]}});
    res.status(200).send(users);
})

app.post("/Birthday/admin/adduser",async(req,res)=>{
    const {name,gender,phoneNumber,email,relation,birthdayDate}=req.body;
    const newUser=new User({name,gender,phoneNumber,email,relation,birthdayDate});
    await newUser.save();
    if(newUser){
        return res.status(200).send("User Added.");
    }
    return res.status(400).send("User Not Added");
})

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
})

//need to build user sessions and admin sesions route as get request