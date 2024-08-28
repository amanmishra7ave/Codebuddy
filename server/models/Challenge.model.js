import mongoose from "mongoose";

const Challenge=mongoose.model('Challenge',{
    challengeer:mongoose.Schema.Types.ObjectId,
    challenged:mongoose.Schema.Types.ObjectId,
    problemCount:Number,
    startDate:Date,
    endDate:Date,
    status:String,
});

export default Challenge;