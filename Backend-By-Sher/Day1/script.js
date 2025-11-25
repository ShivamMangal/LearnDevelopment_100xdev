// Fundamentals of JavaScript:
//arrays and objects / functions return
// async js coding
// foreach map filter find indexOf:

//forEach-> jab muze iss array ke har ke member pr jana ho or uske hisab se change krna ho(kind of loop)!
let arr = [1, 2, 3, 4];
let val = arr.forEach(function (e) {
  console.log(e + 10);
});

//map-> ye bhi sari value pr chelta ha but ye return ma new array deta ha same size ka!

let newArr = arr.map(function (e) {
  return e + 12;
});
console.log(newArr);

// filter-> isma bhi ye sari value pr chalta ha or new array return krta ha ya to same size ka ya usse kam size ka based on condition

var ansFilter = arr.filter(function (e) {
  if (e <= 3) return true;
  else return false;
});
console.log(ansFilter);

//find-> find krne ma help krte ha or ye pheli vali value deta ha like agr isma 2 do bar hota to phela wala deta
let ansFind = arr.find(function(val){
if (val == 3) return val;
})
console. log(ansFind);

// indexOf->help to find index
let ansIndex = arr.indexOf(3);
console.log(ansIndex);

//Object-> value in form of key pair

let studentDetail = {
    name:"Shivam",
    age:23,
    skill:"Web Developmet"
}
console.log(studentDetail);


Object.freeze(studentDetail); // isse Value freeze ho jati ha or ovewrite krne pr change nhi hoti
studentDetail.age = 25;