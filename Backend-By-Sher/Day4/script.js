const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Ye middleware har req pr chelega bar bar");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Bhai Bdiya chl reha ha revesion");
});
app.get("/profile", (req, res) => {
  res.send("ab ham profile page pr ha");
});
//Error Handling
app.use((error, req, res, next) => {
    res.json({
        msg: "Soory something went wrong!"
    });
});
app.listen(3000);
