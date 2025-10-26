//try catch = we use try catch when we know a certain code base may throw an error(Risky Code)


//Without try catch

// function getLength(name) {
//   return name.length;
// }
//   const ans = getLength();  // throw error
//   console.log(ans);
  

// console.log("hi there"); // control never reach here


// with try catch 
function getLength(name) {
  return name.length;
}

try {
  const ans = getLength();
  console.log(ans);
} catch (e) {
    console.log("input is missing:");
    
}

console.log("hi there");  
