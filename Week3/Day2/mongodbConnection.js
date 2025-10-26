// Basic MognoDB connection
// to install - npm install mongoose --save


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin001@cluster0.w4olkts.mongodb.net/userappnew') // test is the name of the database

const User = mongoose.model('User', { name: String, email: String, password: String });

const user = new User({
  name: 'shivam mangal',
  email: 'shivam@gmail.com',
  password: '110022'
});

user.save(); // save the user to the database

// to run this file - node 02mongodbConnection.js
// to check the database - go to the MongoDB Compass and check the database 