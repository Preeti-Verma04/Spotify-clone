const jwt = require("jsonwebtoken");


async function authArtist(req,res,next){
    const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
        message:"Unauthorized"
    })
  }

  try{
    const decoded= jwt.verify(token, process.env.JWT)
    if(decoded.role!=="artist"){
        return res.status(401).json({message:"you do not have access"})

    }

    req.user=decoded;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

}


async function authUser(req,res,next){
   const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
        message:"Unauthorized"
    })
  }

  try{
    const decoded= jwt.verify(token, process.env.JWT)
    if(decoded.role!=="user"&&decoded.role!=="artist"){
        return res.status(403).json({message:"you do not have access"})

    }

    req.user=decoded;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }


}
module.exports={authArtist,authUser};