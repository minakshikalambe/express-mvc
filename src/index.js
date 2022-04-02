const express = require("express");


const usersController = require("./controllers/user.controllers");
const studentsController = require("./controllers/student.controllers");
const batchController = require("./controllers/batch.controllers");
const evaluationsController = require("./controllers/evaluation.controllers");
const submissionController = require("./controllers/submission.controllers");


const app = express();

app.use(express.json());

app.use("/users", usersController);
app.use("/students", studentsController);
app.use("/batchs", batchController);
app.use("/evaluations", evaluationsController);
app.use("/submissions", submissionController);


module.exports = app;

const connect = require("./configs/db");

app.listen(5004, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5003");
});