//UnderStand with Example of Checkbook and Bank
const jwt = require('jsonwebtoken');
// generate , decode , verify. -> ye 3 phase kind of ha jwt ke phele generate kro phir decode kro phir verify :- notes ma likha ha mene

//1.Generate -> use sign keyword with secertKey
const value ={
    name:"shivam",
    accountNumber:123123123
}

const token = jwt.sign(value,"secret");
console.log(token);
//this token has been generated using this secret, and hence this token can only be verified using this secret
// this is your chequebook

// 2.Decode : jwt ke kisi bhi decorder se decode kr sekte ha or jwt.decode(token)

//3.Verify the token
// const tokenVerify = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hpdmFtIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3NjE0NzYxMDF9.TDM_IqJ_IbDrfk9QU6-adzGJRUfrPh4LB4jOyYkB7S0',"secret"); 
// console.log(tokenVerify);





