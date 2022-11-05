const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let email = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: email, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      mobile: user.mobile,
      emailId: user.emailId,
    },
    "functionup-amartya"
  );
  
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {


  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
 
};

const updateUser = async function (req, res) {
  

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{ $set:userData});
  res.send({  data: updatedUser });
};

const deleteUser = async function (req, res) {
  

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{isDeleted:true}});
  res.send({ status: "the account is deleteed",updatedUser });
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser