const express = require('express');
const cookieParser = require('cookie-parser');



const mongoose = require("mongoose");

const cors = require("cors");



const app = express();


// app.use()
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.cookie("cookievalue","I am king");
    res.send("hello");
});
app.get('/mycookie',(req,res)=>{
    res.send(req.cookies);
});

app.get('/deletemycookie',(req,res)=>{
    res.clearCookie("cookievalue");
    res.send("The king has fallen");
})
app.get('/isking',(req,res)=>{
    if(req.cookies.cookievalue === "I am king"){
        res.send("Yes,declare war");
    }
    else{
        res.send("No, go away peasant")
    }
})
app.listen(5550,()=>{
    console.log("application running at port 5550");
})

