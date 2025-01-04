

import mongoose from "mongoose";
import bcrypt from "bcrypt"


;
const teacher = new mongoose.Schema({
    name:{
         
        type:String,
        lowercase: true,
        required: true
    },

    email:{
        type:String,
        lowercase: true,
        required: true,
        unique: true
    },

    password:{
        type:String,
        lowercase: true,
        required: true
    },
   
//    Confirmpassword:{
//         type:String,
//         lowercase: true,
//         required: true,
//     },
   
})


const Teacher = mongoose.model('student',teacher);

export default Teacher;



