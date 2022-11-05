const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name:{ type:String ,
        require:true},
	category:{ type:String ,
        require:true},
	price:{ type:Number ,
        require:true}


}, { timestamps: true });


module.exports = mongoose.model('product', productSchema) //users