const express = require("express");
const app = express();
require("./db");
const cors = require("cors");
const User = require("./routers/book.Router");
const Book = require("./routers/user.Router");

app.use(cors());
app.use(express.json());

app.use("/", User, Book);

app.listen(2022);
console.log("sever is started");
