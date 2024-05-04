import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDb connected!!");

    } catch (error) {
        console.log("MONGODB IS NOT CONNECTED!! ", error);
    }
}

export default connectDB