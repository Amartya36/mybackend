const { count } = require("console")
const productModel = require("../models/productModel")

const createproduct= async function (req, res) {
    let {name,category,price} = req.body

    if(!name||!category||!price){
        return res.send({msg:"all keys are mendatery to fill"})
     }
        let savedData= await UserModel.create({name,category,price})
        res.send({msg: savedData})
    }



module.exports.createproduct = createproduct

