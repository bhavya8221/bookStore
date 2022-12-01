const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  userName: { type: String },
  userContact: { type: Number },
  userAddress: { type: String },
});
module.exports = mongoose.model("user", Schema);
