const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema(
  {
    rollid: { type: String, required: true },
    currentbatch: { type: String, required: false },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const Student = mongoose.model("student", studentSchema); // user => users

module.exports = Student;