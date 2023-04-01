import mongoose from "mongoose";
//Creating the Schema
const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "title is required",
    },
    description: {
      type: String,
      required: "title is required",
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
    lastmodified: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

Schema.virtual("id", () => this._id.toHexString());
Schema.set("toJSON", { virtuals: true });

//Creating the model
const model = mongoose.model("items", Schema);

export default model;
