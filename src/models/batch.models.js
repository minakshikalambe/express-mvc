const mongoose = require("mongoose");


const batchSchema = new mongoose.Schema(
  {
    batchname: { type: String, required: true },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      studentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,
      },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Batch = mongoose.model("batch", batchSchema);

module.exports = Batch;

