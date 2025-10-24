// Middleware is a function that runs between the request and the response. 
// It can be used to check if the user is logged in or not, if the user has the right permissions to access the data, etc. 
// It is a very powerful tool to use in your application. 
// Using middleware to check if the user is logged in or not.
const express = require('express');
const app = express();

app.get("/health-checkup",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const userName = req.headers.userName;
    const password = req.headers.password;
    if(userName!="shivam"&&password!="pass"){
        res.status(403).json({
            msg:"user doesn't exists"
        })
        return;
    }
    if(kidneyId!=1&&kidneyId!=2){
         res.status(411).json({
            msg:"wrong input"
        })
        return;
    }
    res.send("your health is healthy")
})

app.listen(3000)


/*
Run - node index.js
url - localhost:3000/health-checkup?kidneyId=1 (change kidneyId to 2 and 3 to see different outputs)
headers - username: admin, password: admin (use postman)
*/

// This is the  Dumb way of doing input Validation and Auth!
