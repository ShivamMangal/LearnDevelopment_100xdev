const express = require("express");
const app = express();

app.use(express.json())    //JSON data read krne ke lia 
app.use(express.urlencoded({extended:true}))  //x www-form-urlencoded ko read krne ke lia

app.use((req, res, next) => {
  console.log("Ye middleware har req pr chelega bar bar");
  next();
});


app.get("/", (req, res) => {
  res.send("Hello Bhai Bdiya chl reha ha revesion");
});

app.use((error, req, res, next) => {
    res.json({
        msg: "Soory something went wrong!"
    });
});
app.listen(3000);