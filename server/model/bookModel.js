const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  bookName: { type: String },
});
module.exports = mongoose.model("book", Schema);
