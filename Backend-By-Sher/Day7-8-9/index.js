const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

//setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs"); // use ejs

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index",{files:files});   //index.ejs ma {files name se : file ka data} bhej reha hu
  });
});
app.get("/file/:fileName", (req, res) => {
      fs.readFile(`./files/${req.params.fileName}`,"utf-8",function(err,filedata){
        
      })
});
app.post("/create", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
 
  fs.writeFile(`./files/${title}.txt`, content, (err) => {
    if (err) {
      return res.send("Error creating file");
    }
    res.redirect("/");
  });
});


app.listen(3000, () => {
  console.log("Server Started🚀");
});
