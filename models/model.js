import mongoose , { Schema} from "mongoose";

const model = new Schema(
    {
    title: String,
    note : String,
},

{
    timestamps:true

}

);

const collections = mongoose.models.contents || mongoose.model("contents", model);

export default collections;
