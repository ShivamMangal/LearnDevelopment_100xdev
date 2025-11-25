var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  req.session.ban = true;                   //session create
});

router.get("/checkban", (req, res) => {
  console.log(req.session);                 
  if (req.session.ban == true) {            //ek bar session banne ke bad ham use kisi bhi route ma access kr sekta ha
    res.send("You are Banned");
  }
  else{
     res.send("You are NOT Banned");
  }
});

router.get("/routerban", (req, res) => { 
  req.session.destroy(function (err) {        //for delete the session
    if (err) throw err;
    res.send("Banned Removed");
  });
});

module.exports = router;
