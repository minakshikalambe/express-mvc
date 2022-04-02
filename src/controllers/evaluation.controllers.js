const express = require("express");

const Evaluation = require("../models/student.model");


const router = express.Router();

router.get("", async (req, res) => {
    try {
      const evaluations = await Evaluation.find().lean().exec();
  
      return res.status(200).send({ evaluations: evaluations }); 
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const evaluation = await Evaluation.create(req.body);
  
      return res.status(201).send(evaluation);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  module.exports = router;