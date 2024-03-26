import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tharsikan:tharsikan1999@cluster0.p970wqi.mongodb.net/note", {
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
