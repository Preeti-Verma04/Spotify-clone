const userModel= require('../models/user.model'); 
const jwt = require('jsonwebtoken');
const bcrypt= require('bcryptjs')




async function registerUser(req, res){
    const {username,email,password , role="user"}= req.body

    const isUserAlreadyExist= await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"user already exist"
        })
    }

    const hash = await bcrypt.hash(password,10)
 
    const user= new userModel({
        username,
        email,
        password:hash,
        role
    })
    await user.save()

    const token = jwt.sign({
    id: user._id,
    role: user.role
}, process.env.JWT)

    res.cookie("token", token,{
        httpOnly: true,       // Security ke liye zaroori (JS read nahi kar payega)
    secure: false,        // Localhost (HTTP) par hain isliye false rakhein
    sameSite: "lax",      // Cross-site request handle karne ke liye
    maxAge: 24 * 60 * 60 * 1000
    })

    res.status(201).json({
        message:"user registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}

async function loginUser(req,res){
    const {username,email,password}= req.body

    const user = await userModel.findOne(
           username ? { username } : { email }

    )

    if(!user){
        return res.status(401).json({
            message:"invalid user"
        })
    }

    const isPassword = await bcrypt.compare(password, user.password)

    if(!isPassword){
        return res.status(401).json({
            message:"invalide user"
        })
    }

    const token =  await jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT)

    res.cookie("token",token, {
        httpOnly: true,       // Security ke liye zaroori (JS read nahi kar payega)
    secure: false,        // Localhost (HTTP) par hain isliye false rakhein
    sameSite: "lax",      // Cross-site request handle karne ke liye
    maxAge: 24 * 60 * 60 * 1000
    })
    

res.status(200).json({
    message:"Login successfull",
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role

    }
})
}



module.exports={registerUser, loginUser};