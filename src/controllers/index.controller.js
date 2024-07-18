const Index = require("../models/index.model");

// Retrieve all Customers from the database.
exports.sendProp = (req, res) => {
  Index.getProp((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};
