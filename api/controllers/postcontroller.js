const mongoose = require("mongoose");
const codeModel = require("../models/code");
module.exports.post = async (req, res, next) => {
  const code = req.body["code"];
  const name = req.body["name"];
  const newCode = codeModel({
    _id: mongoose.Types.ObjectId(),
    name: name,
    code: code,
  });

  newCode.save();
  res.send("saved");
};

module.exports.get = async (req, res, next) => {
  const name = req.query.name;
  const code = await codeModel.findOne({ name: name }).exec();
  res.send(code["code"]);
};
