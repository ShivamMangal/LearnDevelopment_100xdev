//Array & Objects👇
// const allUser =[{
//     name:"Shivam",
//     age:22
// },{
//     name:"Vivek",
//     age:20
// }, {
//     name:"Ritik",
//     age:18
// }
// ]

// for(let i=0; i<allUser.length; i++){
//     if(allUser[i]["age"]>18){
//         console.log(allUser[i]["name"]);
//     }
// }

//Bounty-using htop it dont show proper utilisation but using top it show 100 percent using 1 thread 👇
// let sum = 0;
// for(let i=0; i<10000000000000; i++){
//     sum = sum+i;
// }
// console.log(sum);

//Functions👇
// function sumNumber(a,b){
//     console.log("Value of Sum is:"+(a+b));

// }
// sumNumber(5,6);

//Call Back Function👇

function sum(num1, num2, funToCall) {
  let result = num1 + num2;
   funToCall(result);
}

function displayResult(data) {
  console.log("Result of the Sum is:" + data);
}

function displayResultPassive(data) {
  console.log("sum result is:" + data);
}

const ans = sum(2,5,displayResult);