const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createorder= async function (req, res) {
    let {userId,productId}= req.body
    if(!userId||!productId){
        return res.send({msg:"all keys are mendatery to fill"})
     }
    const userdata = await userModel.findById(userId)
    if (!userdata){return res.send({msg:"user is not present"})}

    const productdata=await userModel.findById(userId)
    if (!productdata){return res.send({msg:"product is not present"})}
const isfreeappuser=req.isfreeappuser

if (isfreeappuser){

const model1={
userId:userId,
productId:productId,
amount:0,
isfreeappuser:isfreeappuser,
date:new Date()
}
const order=await orderModel.create(model1)
return res.send(order)
}
else{
if (productdata.price >userdata.balance)
{
    return res.send({msg:"you have in sufficent balance"})
}
const model2={
    userId:userId,
    productId:productId,
    amount:productdata.price,
    isfreeappuser:isfreeappuser,
    date:new Date()
    }
    const order=await orderModel.create(model2)
const user= await userModel.findbyIdAndUpdate(userId,{$inc:{balance:-productId.price}})
return res.send(order)
}

   
}

module.exports.createorder= createorder
