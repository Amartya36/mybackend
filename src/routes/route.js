const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createproduct", productController.createproduct)

router.post("/createUser", commonMW.mid1, UserController.createUser)

 router.post("/createorder", commonMW.mid1, orderController.createorder)



module.exports = router;