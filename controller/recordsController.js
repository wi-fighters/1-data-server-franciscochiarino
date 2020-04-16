const db = require('../model/dataBase');

exports.getAllRecords = (req, res) => {
    res.send(db.getState());
}

exports.addRecord = (req, res) => {
    req.body.year = parseInt(req.body.year, 10);
    req.body.price = parseFloat(req.body.price, 10);
    req.body.id = db.getState().records.length;
  
    // Push to Database
    db.get("records")
      .push(req.body)
      .write()
  
    res.send(db.getState());
}