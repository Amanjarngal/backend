import { Auth } from "../models/auth.schema.js";
import { compairePassword, hashPassword } from "../../utils/hashPassword.js";
import { genToken } from "../../utils/authToken.js";


export const signupController =async(req ,res , next ) =>{
    try {
        const {email,userName,password} = req.body;
        if(!email || !userName || !password){
            return res.status(400).json({
                message : "All field are required "
            });
        }
        // if user Already exixt 
        const isUserExist = await Auth.findOne({email});
        if(isUserExist){
            return res.status(400).json({
                message : "User already exixt !!! "
            });
        }

        // hashing the password 
        const hashed =await hashPassword(password);

        const user = await Auth.create({
            email,
            userName,
            password :hashed,
        });

        const token = await genToken(user._id);

        res.cookie("token",token, {
            httpOnly: true,
            sameSite : "strict",
            secure: false,
            maxAge : 24 * 60 *60 *1,
        });

        return res.status(201).json({
            message: "user created successfuly",
            user : user._id,
        });

    } catch (error) {
        return res.status(500).json({
            message : error.message,
        });
    }
};

export const loginController =async (req,res,next) =>{
    try {
        const {email,password} = req.body;
    if( !email || !password){
        return res.status(400).json({
            message: "All field is required",
        })
    }
    const isEmailExist = await Auth.findOne({email});
    if(!isEmailExist){
        return res.status(400).json({
            message : "Invalid Email !"
        });
    }

    const isPassword = await compairePassword(password , isEmailExist.password);
    if(isPassword){
        const token = await genToken(isEmailExist._id);

    res.cookie("token" ,token , {
        httpOnly:true,
        sameSite : "strict",
        secure: false,
        maxAge : 24 * 60 *60 *1,
        
    });                                                                                                     
        return res.status(200).json({
            message: "Login Successfully !",
            data : isEmailExist._id,
        });

    }else{
        res.status(400).json({
            message : "Invalid Password !"
        })
    }
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        });
    }
}

export const productDisplay = async(req,res,next ) =>{
    try {
       return res.status(200).json({
        message :"My Products",
       }) 
    } catch (error) {   
        return res.status(500).json({
            message : error.message,
        });
    }
};