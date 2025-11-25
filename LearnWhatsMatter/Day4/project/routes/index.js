var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.cookie("age", 23); //cookie Create
  res.render("index");
});
router.get("/read", (req, res) => {
  //cookie Read
  console.log(req.cookies.age);
});
router.get("/delete", (req, res) => {
  //cookie Delete
  res.clearCookie("age");
  res.send("clear ho gai");
});
module.exports = router;
