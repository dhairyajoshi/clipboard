const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, unique: true },
  code: String,
});

module.exports = mongoose.model("code", codeSchema);
