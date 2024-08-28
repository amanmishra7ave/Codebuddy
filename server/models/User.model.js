import mongoose from "mongoose";

const User=mongoose.model('Problem',{
    username:String,
    password:String,
});

export default User;