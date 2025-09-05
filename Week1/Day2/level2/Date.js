// const currentDate = new Date();

// console.log("CurrentDate:"+currentDate);
// console.log("Year:"+currentDate.getFullYear());
// console.log("Month:"+currentDate.getMonth());
// console.log("Date:"+currentDate.getDate());
// console.log("Day:"+currentDate.getDay());
// console.log("Time:"+currentDate.getTime()); // Get Time in MS


// Check how much time function take 👇 -> one of the main use to use getTime
// function calculateSum() {
//     let a = 0;
//     for(let i=0; i<10000000; i++){
//         a = a+i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMS = beforeDate.getTime();

// calculateSum();

// const afterDate = new Date();
// const afterTimeInMS = afterDate.getTime();
// console.log("Time in Ms:");
// console.log(afterTimeInMS-beforeTimeInMS);


// Other Example of getTime to Create a stop Watch👇

function stopWatch(){
    console.log(new Date().getTime());
}
setInterval(stopWatch,1000)