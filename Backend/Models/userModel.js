const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    relation:{
        type:String,
        required:true
    },
    birthdayDate:{
        type:Date,
        required:true
    }
})

const UserModel=mongoose.model("User",UserSchema);

module.exports=UserModel;