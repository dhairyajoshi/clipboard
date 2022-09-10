const mongoose = require("mongoose");
const codeModel = require("../models/code");
module.exports.post = async (req, res, next) => {
  const code = req.body["code"];
  const newCode = codeModel({
    _id:mongoose.Types.ObjectId(),
    code: code,
  });

  newCode.save();
  res.send("saved");
};
 