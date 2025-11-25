//file index.js
var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  let userdata = await userModel.create({
    username: "ayush",
    nickname: "blasterboy",
    description: "i am 24 and i love tech, football and gaming",
    categories: ["fifa25", "fortnite", "gta5", "spiderman", "needforspeed"],
    //datecreated: jis time se bnega usi time ka date rekega
  });
  res.send(userdata);
});

//1.
// router.get("/find", async function (req, res) {
//   var regex = new RegExp("^shivam$","i")       //(search,flag) i stand for ignore case
//   let userfind = await userModel.find({username:regex});
//   res.send(userfind);
// });

// 2.
// router.get("/find", async function (req, res) {
//   let userfind = await userModel.find({categories:{$all:['fifa25']}});
//   res.send(userfind);
// });

//3
// router.get("/find", async function (req, res) {
//   let date1 = new Date('2025-11-24')
//   let date2 = new Date('2025-11-25')
//   let user = await userModel.find({datecreated:{$gte:date1,$lte:date2}})      //gte-greatethanequal,lte-lessthanequal
//   res.send(user);
// });

//4
// router.get("/find", async function (req, res) {
//   let userfind = await userModel.find({categories:{$exists:true}})
//   res.send(userfind);
// });

//5- syntax yadd krna pdega thoda alag sa ha
// router.get("/find", async function (req, res) {
//   let user = await userModel.find({
//     $expr: {        //expression
//       $and: [
//         { $gte: [{ $strLenCP: "$nickname" }, 7] },
//         { $lte: [{ $strLenCP: "$nickname" }, 12] },
//       ],
//     },
//   });
//   res.send(user);
// });

module.exports = router;
