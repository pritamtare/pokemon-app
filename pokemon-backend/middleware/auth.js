const jwt = require("jsonwebtoken");

const secreteKey = "magicRiver";

const verifyToken = (req, res, next) =>{
    let token = req.headers["token"];
    if(!token){
        return res.status(403).send("No token provided");

    }

    jwt.verify(token, secreteKey, (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        next();
    })
}

module.exports = {verifyToken}