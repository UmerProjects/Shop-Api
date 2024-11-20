import mongoose, { mongo } from "mongoose"


const serviceSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        max: 30
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        url: String,
        filename: String,
    }
})


export default mongoose.model("Service", serviceSchema)