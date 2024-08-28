import mongoose from "mongoose";

exports.Problem=mongoose.model('Problem',{
    userId:mongoose.Schema.Types.ObjectId,
    date:Date,
    count:Number,
});

