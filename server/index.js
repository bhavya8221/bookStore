const express = require("express");
const app = express();
// require("./db");
const pool = require("./db");
const cors = require("cors");
const User = require("./routers/book.Router");
const Book = require("./routers/user.Router");
app.use(cors());
app.use(express.json());
// app.use("/", User, Book);
// post username
app.post("/user", async (req, res) => {
    try {
      const { userid,username,usermobile,useraddress } = req.body;
      const User = await pool.query(
        "INSERT INTO userdata (userid,username,usermobile,useraddress ) values($1,$2,$3,$4) RETURNING *",
        [userid,username,usermobile,useraddress]
      );
      res.json(User.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
// get username
app.get("/user", async (req, res) => {
    try {
      const User = await pool.query("SELECT * FROM userdata");
      res.json(User.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
// post bookname
  app.post("/book", async (req, res) => {
    try {
      const { bookid,bookname} = req.body;
      const Book = await pool.query(
        "INSERT INTO book (bookid,bookname ) values($1,$2) RETURNING *",
        [bookid,bookname]
      );
      res.json(Book.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
// get bookname
app.get("/book", async (req, res) => {
    try {
      const Book = await pool.query("SELECT * FROM book");
      res.json(Book.rows);
    } catch (err) {
      console.error(err.message);
    }
  });




// app.listen(2022);
// console.log("sever is started");
app.listen(2022, () => {
    console.log("server has started on port 2022");
  });
