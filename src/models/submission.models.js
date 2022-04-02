const mongoose = require("mongoose");


const submissionSchema = new mongoose.Schema(
  {
    rollid: { type: String, required: true },
    marks: { type: Number, required: true },
    currentbatch: { type: String, required: false },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
      },
      student_id: {
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

const Submission = mongoose.model("submission", submissionSchema); // user => users

module.exports = Submission;