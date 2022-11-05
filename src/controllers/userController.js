const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let {name,address,balance,gender,age}=req.body
 isfreeappuser=req.isfreeappuser
 if(!name||!address||!balance||!gender||!age){
    return res.send({msg:"all keys are mendatery to fill"})
 }
    let savedData= await UserModel.create({name,address,balance,gender,age})
    res.send({msg: savedData})
}



module.exports.createUser= createUser
