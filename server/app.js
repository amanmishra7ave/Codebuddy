const express=require('express');
const monotone=require('mongoose');
const cors=require('cors');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

const app=express();
const PORT=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URL,
    {
        useNewUserParser:true,
        useUnifiedTopology:true,
    }
);
