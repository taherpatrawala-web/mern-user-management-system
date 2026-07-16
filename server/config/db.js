const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("Trying to connect...");

        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Message:", error.message);
        console.log("Name:", error.name);
        console.log("Code:", error.code);
        console.log("Cause:", error.cause);
        console.log(error);

        process.exit(1);
    }
};

module.exports = connectDB;