import mongoose from "mongoose"
const MONGO_URI = process.env.MONGODB_URI;

export const db = async ()=>{
try {
    await mongoose.connect(MONGO_URI)
    console.log("Mongoos is Connected Succesfully")

} catch (error) {
    console.log("Mongoos Connection Failed !!",error)
    // throw error;
}
};


