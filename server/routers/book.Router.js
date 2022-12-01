const express = require("express");
const Book = require("../model/bookModel");
const router = express.Router();
router.post("/addbook", async (req, res) => {
  let result = new Book(req.body);
  console.log(req.body);
  let data = await result.save();
  res.send(data);
});
// get
router.get("/getbook", async (req, res) => {
  let result = await Book.find();
  res.send(result);
});
module.exports = router;