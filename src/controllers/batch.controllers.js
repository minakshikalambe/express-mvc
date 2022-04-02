const express = require("express");

const Batch = require("../models/batch.models");


const router = express.Router();

router.get("", async (req, res) => {
    try {
      const batchs = await Batch.find().lean().exec();
  
      return res.status(200).send({ batchs: batchs }); 
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const batch = await Batch.create(req.body);
  
      return res.status(201).send(batch);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  module.exports = router;