import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Product Category is required"],
      enum: [
        "BLOCKOUT_CURTAINS",
        "SHEER_CURTAINS",
        "WAVE_FOLD_CURTAINS",
        "EYELET_CURTAINS",
      ],
    },
    title: {
      type: String,
      required: [true, "Product Name is required"],
      min: 10,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Product", ProductSchema)