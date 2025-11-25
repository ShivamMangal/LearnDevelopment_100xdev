var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", (req, res) => {
  res.render("index");
});


router.get("/create", async (req, res) => {
  const createduser = await userModel.create({                                        // create the user
    username: "shivam007huihui",
    name: "shivam",
    age: 23,
  });
  res.send(createduser);
});

router.get("/allusers", async (req, res) => {
  const allusers = await userModel.find();                                               // to get all user(document) data it give array
  res.send(allusers);
});

router.get("/singleusers", async (req, res) => {
  const allusers = await userModel.findOne({ username: "shivam007huihui" });             // (to get particular user) if there is no user it give null
  res.send(allusers);
});

router.get("/delete", async (req, res) => {
  let deleteuser = await userModel.findOneAndDelete({                                     // delete the user

    username: "shivam007huihui",
  });
  res.send(deleteuser);
});

module.exports = router;
