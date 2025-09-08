//Create Object👇
// const user ={
//     name:"Shivam",
//     age:23,
//     gender:"Male"
// }
// console.log(user["age"]);
// console.log(user.gender);
// console.log(user["name"]);

//String Object👇
const users = '{ "name":"Shivam","age":23}';

// JSON.parse -> convert String object into Normal obect so we can access like normal object
// JSON.stringify -> convert object into string

const user = JSON.parse(users);
console.log(user.name);
