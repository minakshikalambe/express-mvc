const mongoose = require("mongoose");


const evaluationSchema = new mongoose.Schema(
  {
    batchid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Evaluation = mongoose.model("evaluation", evaluationSchema); // user => users

module.exports = Evaluation;

