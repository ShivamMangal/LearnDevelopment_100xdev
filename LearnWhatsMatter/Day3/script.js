const express = require("express");
const app = express();

// Simple Middleware
app.use((req, res, next) => {
  console.log("middleware activate");
  next(); 
});

// Dynamic Route using :
app.get("/user/:name", (req, res) => {
  const username = req.params.name;
  res.send(`Hello ${username}! Welcome to Express.`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
