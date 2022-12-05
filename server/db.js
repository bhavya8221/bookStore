// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/bookStore");
const Pool =require("pg").Pool;
const pool= new Pool({
    user:"postgres",
    password:"12345",
    host:"localhost",
    port:5432,
    database:"BookStore"
})
module.exports=pool;