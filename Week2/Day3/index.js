// ->Arrow Function

function sum(a,b){
    return a+b;        //normal way
}

const sum2=(a,b)=>{
   return a+b;        //Arrow Function
}

 // ->map function
 //Question-given an array give me back a new array in which every value is multiplied by 2

const input =[1,2,3,4,5];
const newArr =[];

for(let i=0; i<input.length; i++){      //noraml way
    newArr.push(input[i]*2);
}
// console.log(newArr);

const transform=(i)=>{
    return i * 2;
}
const ans = input.map(transform);      // map
console.log(ans); 


//-> filtering
//question- given an input array give me all even values from it

const arr =[1,2,3,4,5,6,7,8,9];
const newArray = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){                        //noraml way
        newArray.push(arr[i]);
    }
}
console.log(newArray);

const filterLogic=(n)=>{
    if(n%2==0) return true;
    else return false;
}

const ans2 = arr.filter(filterLogic);
console.log(ans2);
