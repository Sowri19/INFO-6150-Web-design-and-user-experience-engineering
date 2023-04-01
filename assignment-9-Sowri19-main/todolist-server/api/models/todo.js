import mongoose from "mongoose";
let dateandtime = new Date();
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
    dueDate: {
      type: String,
      default: dateandtime.toDateString(),
    },
    dueTime: {
      type: String,
      default: dateandtime.toLocaleTimeString(),
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

Schema.virtual("id", () => this._id.toHexString());
Schema.set("toJSON", { virtuals: true });

//Creating the model
const model = mongoose.model("items", Schema);

export default model;
