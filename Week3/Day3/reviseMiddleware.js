/*
Express is a web framework that mainly works using middleware functions.
An Express app is basically a chain of middleware calls.

A middleware has access to:
req → request object
res → response object
next → function to move to the next middleware

Middleware can:
Run any code
Modify req or res
End the request–response cycle
Or call next() to pass control
 */

const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    // with middleware
    res.json({
      msg: "Sorry you are not of age yet!",
    });
  }
}
 
// app.use(isOldEnoughMiddleware); -> sirf ye bhi use kr sekte ha to jitne bhi iske niche wale ha uspr middlewareFunction add krne ki jarurat nhi ha.

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});
app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 2",
  });
});

app.listen(3000);
