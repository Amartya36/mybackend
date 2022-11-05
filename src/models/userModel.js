const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
   
    name:{ type:String ,
    require:true},
	balance:{
        type:Number,
        default:100
    }, 
	address: { type:String ,
        require:true},
	age:{ type:Number ,
        require:true},
    gender: {
    type: String,
    enum: ["male", "female", "other"],
    require:true } ,
	isfreeappuser:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });

module.exports = mongoose.model('productuser', userSchema) //users



