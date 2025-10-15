import jwt from "jsonwebtoken";

export const protect= async (req , res , next) =>{
    try {
        const token = req.cookies.Cookie_1;
        const decode = await jwt.verify(token , process.env.SECRET_KEY);
        if(decode){
            next();
        }else{
            return res.status(401).json({
                message: "unauthorized",
            });
        }


    } catch (error) {
        return res.status(500).json({
            message : "unauthorized user",
        })
    }
}