//cuurent data

let currentDate=  new Date();
console.log(`CUrrent Date is ${currentDate}`);
// set new date
const newDate = new Date("Dec 15 2022");
console.log(`CUrrent Date is ${newDate}`);


// Today Date
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = currentDate.getDay();
console.log(`Today date is ${weekday[d]} `);
// Cuurent Time

console.log(`Current TIme ${currentDate.getHours()} and ${currentDate.getMinutes()} and ${currentDate.getSeconds()}`)


// sqaure root


let num=Math.sqrt(64);
console.log(num);


// Maxium Number

let maxnumber=Math.max(10,20,30);


console.log(maxnumber);


// random Number

let randomnumber=(Math.random()*100);
console.log(randomnumber);


// number is greater
 let numgive=200;
 if(numgive>200 && numgive <500){
    console.log(`NUMBER is between 200 and 500`)

 }
 else{
    console.log(`NUMBER is not between 200 and 500`)

 }

 let checkequity=(x,y)=>{

    if(x===y){
        console.log("equal");
    }
    else{
        console.log("not equal");
    }
 }

 checkequity(0,"0")
 checkequity(1,1);