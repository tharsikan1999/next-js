import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/note", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally, you can add more options here
            // For example:
            // useCreateIndex: true,
            // useFindAndModify: false,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;
