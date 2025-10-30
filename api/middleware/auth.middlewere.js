import jwt from "jsonwebtoken";
import { Auth } from "../models/auth.schema.js";

export const protect= async (req , res , next) =>{
    try {
        const token = req.cookies.token;
        const decode = await jwt.verify(token , process.env.SECRET_KEY);
        console.log(decode);
        req.user = await Auth.findById(decode.id).select("-password");
        console.log(req.user);
        next();
    } catch (error) {
        return res.status(500).json({
            message : "unauthorized user",
        })
    }
}

export const onlyUser = (req,res,next) =>{
     try {
        if(req.user.role){
            next();
        }else{
            return res.status(401).json({
            message : "acces denied"
        }) ;
        }
     } catch (error) {
        return res.status(401).json({
            message : "unauthorized"
        });
     }
}; //http://localhost:5000/api/auth/user    

export const onlyAdmin = (req,res,next) =>{
     try {
        if(req.user.role == "admin"){
            next();
        }else{
            return res.status(401).json({
            message : "acces denied"
        }) ;
        }
     } catch (error) {
        return res.status(401).json({
            message : "unauthorized"
        });
     }
}; //http://localhost:5000/api/auth/admin