const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
  userId: {
    type:ObjectId,
    ref:"newuser",
    require:true
    },
   productId: {
        type:ObjectId,
        ref:"product",
        require:true
        },
	amount:{ type:Number,
        require:true},
	isfreeappuser: { type:Boolean,
        require:true}, 
	date: Date
  

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
