
const mongoose = require ("mongoose");
// const URI =  "mongodb://127.0.0.1:27017/"
const URI =  process.env.MONGODB_URI;

if(!URI){
    console.log("Please define the MONGODB_URI environment variable inside .env file");
}

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`database error: ${error.message}`);
        process.exit(1);
    }
};

module.exports =connectDB;