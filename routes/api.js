const express = require('express');
const router = express.Router();
const {getAllRecords, addRecord} = require('../controller/recordsController');

// Get Records
router.get("/records", getAllRecords);

// Post Record
router.post("/records", addRecord);
      
module.exports = router