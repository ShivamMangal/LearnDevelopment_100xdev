const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./users");

passport.use(new LocalStrategy(User.authenticate()));

router.get("/", (req, res) => {
  res.render("index", { error: req.flash("error") });
});

router.get("/profile", isLoggedIn, (req, res) => {
  res.send("Welcome to your profile, " + req.user.username);
});

router.post("/register", (req, res, next) => {
  const userData = new User({
    username: req.body.username,
    secret: req.body.secret
  });

  User.register(userData, req.body.password)
    .then(() => {
      passport.authenticate("local")(req, res, () => res.redirect("/profile"));
    })
    .catch(next);
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
    failureFlash: true
  })
);

router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;
