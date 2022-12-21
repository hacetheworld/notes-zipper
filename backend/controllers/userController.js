const expressAsyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const generateToken = require("../utils/generatToken");

const registerUser=expressAsyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body
    console.log('hi before find');
    const userExist = await User.findOne({ email })

    if (userExist){
        res.status(400)
        throw new Error("message User already exist")
    }
    const user = await User.create({
        name,email,password,pic
      });
      // Save the user to the database
      if (user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            isAdmin:user.isAdmin,
            toekn:generateToken(user._id)
        })

    }
        else{
            res.status(400)
            throw new Error("Something went wrong")

        }


})


const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

module.exports={registerUser,authUser}