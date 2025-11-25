const express = require("express");
const app = express();
const path = require("path");

//setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs"); // use ejs

app.get("/", (req, res) => {
  res.render("index");
});
//dynamic Route :Variable
app.get("/profile/:userName", (req, res) => {
  //req.param = get parameter Value
  res.send(`Welcome,${req.params.userName}`);
});

app.listen(3000, () => {
  console.log("Server Started🚀");
});
