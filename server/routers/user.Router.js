const express = require("express");
const User = require("../model/userModel");
const router = express.Router();
router.post("/user", async (req, res) => {
  let result = new User(req.body);
  console.log(req.body);
  let data = await result.save();
  res.send(data);
});
// get
router.get("/user", async (req, res) => {
  let result = await User.find();
  res.send(result);
});
module.exports = router;