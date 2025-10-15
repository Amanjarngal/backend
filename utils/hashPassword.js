import bcrypt from "bcrypt"

export const hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    // console.log(salt)

    const hashed = await bcrypt.hash(String(password) , salt);
    return hashed;
}
export const compairePassword = async (password , registerPassword) =>{
    return bcrypt.compare(password ,registerPassword);
};