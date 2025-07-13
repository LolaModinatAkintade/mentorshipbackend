import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from  "body-parser";


dotenv.config();
// database connection
const connectDb = async () => {
    try{

        mongoose.connection.on("error", (error)=> {
            console.error("MongoDB connection error:", error);
        })

        const url = ${process.env.MONGODB_URL}/'MentorshipProject';
        await mongoose.connect(url);
        console.log("database connected successfully");
    } catch (error) {
        console.log(error)
    }
}
    export default connectDb;