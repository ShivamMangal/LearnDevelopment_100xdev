// 4 Pillars of DOM:
// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// const a = document.querySelector("h1") //piller1
// console.log(a)

// a.innerHTML = "Change Html"         //piller2
// console.log(a)

// a.style.color = "red"                  //piller3
// a.style.backgroundColor="black"        //isma ham camel case use krete ha

// a.addEventListener("click",function(){
//     console.log("Hello ji kya hall ha!");
//     a.style.color = "aqua"

// })

// -----------------------------------------------------------------------------------------

// - -> Simple example of bulb or whatever clicking on the same button

// const bulb = document.querySelector("#bulb");
// const butt = document.querySelector("button")
// let flag = 0
// butt.addEventListener("click",function(){
//     if(flag==0){
//         bulb.style.backgroundColor="yellow";
//         flag=1;
//     }
//     else{
//         bulb.style.backgroundColor="white"
//         flag=0;
//     }
// })

// -----------------------------------------------------------------------------------------

// --› selecting multiple elements at a same time

const h = document.querySelectorAll("h1");
// console.log(h); // isma but data node list ki form ma aata ha
h.forEach(function (e) {
  console.log(e);           // so aase print kr lia
});
