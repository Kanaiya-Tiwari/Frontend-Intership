
//Write a JavaScript function that reverse a number.
let reverseNumber=(number)=>
{
    //console.log(number);
    //console.log(String(number).split(''));
    let result = Number(String(number).split('').reverse().join(''));
   // let val= num.reverse();
    return result;
}
let result1=reverseNumber(123456789);
console.log(`The reverse number is ${result1}`);


//Write a JavaScript function that returns a passed string with letters in alphabetical order.


let sortString=(alpha)=>
{   let  alphasort=alpha.toUpperCase();
    let data=alphasort.split(" ");
    //console.log(data)
    //console.log("Sorted array= "+data.sort());
     return data.sort();
     
}

let result2=sortString("My name is Tiwari");
console.log(result2);




//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

let upperFirstString=(upperAlpha)=>
{   
    let data=upperAlpha.split(" ");
   // console.log(data);
   var new_data=[];
    for (let x of data)
    {
      //  console.log(x);
        let just=x.charAt(0).toUpperCase();
         let resutlt=just.concat(x.slice(1));
         new_data.push(resutlt);
         // console.log(`UPPERCASE LETTER IS ${resutlt}`);
    }
    // for( let i=0;i<upperAlpha.length;i++){
    //     console.log(upperAlpha[i])
    // }
    return new_data;
}



let result3=upperFirstString('hello how are You');

console.log(result3);






//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let longestString=(typealpha)=>
{  
     
    if(typeof typealpha !=='string')
    {
        //console.log("enter a valid");
    }
    else{
         let array=typealpha.split(" ");
        let arrnum=[];
       // console.log("typealpha",array)
         //array.find((val,index)=>Math.max(index))
        for(let i=0;i<array.length;i++){
            arrnum.push(array[i].length);
        }
       // console.log(arrnum);
      let maxnum= Math.max(...arrnum);
       //console.log(array);
        //console.log(maxnum);
      //  console.log(`longest word is ${array[arrnum.indexOf(Math.max(...arrnum))]}`);
        return array[arrnum.indexOf(Math.max(...arrnum))]
    }
}

let result4=longestString("hello how You");
console.log(`longest word within the string ${result4}`);



//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.


let vowel=(string1)=>{
    var allVowels = string1.match(/[aeiou]/gi);
if( allVowels != null ){
  var numberOfVowels = allVowels.length;
} else {
  var numberOfVowels = 0;  
}

//console.log("NUMBER OF VOWEL"+numberOfVowels);
return numberOfVowels;

}

let result5=vowel('yyy i am here as per');
console.log(`number of vowels within the string ${result5}`);







//Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.



let country=(...array)=>
{   
    if( Array.isArray(array)){
        let data=array.toString();
        let arrydata=data.split(',');
        //console.log("typealpha",arrydata)
        let arrnum=[];
        //array.find((val,index)=>Math.max(index))
       for(let i=0;i<arrydata.length;i++){
           arrnum.push(arrydata[i].length);
       }
      // console.log(arrnum);
    // let maxnum= Math.max(...arrnum);
      //console.log(array);
       //console.log(maxnum);
       //console.log(`longest word is ${arrydata[arrnum.indexOf(Math.max(...arrnum))]}`);
       return arrydata[arrnum.indexOf(Math.max(...arrnum))]
    }
    else{
       // console.log("enter a valid output")
    }
}

let result6=country(['india','china','pakistan','usa']);
console.log(`longest country name as output ${result6}`);





// Write a JavaScript program to pass a 'JavaScript function' as parameter.

let meet=()=> {
    return 'Hello';
}

let name=(user, func)=>
{

   
    const message = func();
   // return message;
    return `${message} ${user}`;
}

let result7=name('John',meet);
console.log(`function parameter ${result7}`);

//  Write a JavaScript function to get the function name.

function funname() {
    //console.log( arguments );
    //console.log( arguments.callee );
   // console.log( arguments.callee.name );
    //arguments.callee.name
    return arguments.callee.name;
}

let result8=funname();
console.log(`function name is ${result8}`);

