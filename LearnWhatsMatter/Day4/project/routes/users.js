const mongoose = require("mongoose");

// node se bol rehe ha mongoose ke through connect ho mongoDb se(server ispr chl reha ha:port ha ye/dbName ) like:localhost:3000 -> 127 krkr localhost ha or 3000 port
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro"); //Create DB

const userschema = mongoose.Schema({             // create Document Data
  username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("user", userschema); //create collection (name,schema)
