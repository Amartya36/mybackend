const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName : {
           type: String,
    
            required: true
         },
    lastName :{
            type: String,
    
             required: true
         },
    mobile: {
            type: String,
             required: true
         },
    emailId : {
            type: String,
         required: true
        },
    password : {
           type: String,
            required: true
         },
    gender : {
             type: String,
           enum: ["male", "female", "other"]},
	isDeleted: { type:Boolean,
    default:false
    }, //default value is false 
    age : Number
    // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,

    //     required: true
    // },
    // emailId: String,
    // password: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "other"]
    // },
    // age: Number,
}, { timestamps: true });

module.exports = mongoose.model('auth1user', userSchema)
