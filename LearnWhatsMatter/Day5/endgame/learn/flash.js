//file index.js
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/failed", function (req, res) {
  req.flash("age", 23); //(kuchbhi,kuchbhaivalue)
  res.send("bn gya");
});
router.get("/checkkro", function (req, res) {
  console.log(req.flash("age"));         //flash ka data dusre route pr use krna
  res.send("check krlo terminal pr");
});

module.exports = router;
