const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


 const mid1= function ( req, res, next) {
    let  isfreeappuser = req.headers["isfreeappuser"]
    if (isfreeappuser){
      isfreeappuser=isfreeappuser.toLowerCase()=='true'?true:false
      req.isfreeappuser=isfreeappuser
    next() }
     else {res.send ({msg:"isfreeappuser is not find"})}
      
 }



module.exports.mid1= mid1

