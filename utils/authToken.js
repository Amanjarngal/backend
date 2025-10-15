import jwt from "jsonwebtoken"

export const genToken = async (id) =>{
    return await jwt.sign({ id : id} , process.env.SECRET_KEY, {
        expiresIn: "1d",
    });
};