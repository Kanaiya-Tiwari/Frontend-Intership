
//Write a JavaScript function that reverse a number.
let rnumber=(number)=>
{
    console.log(number);
    console.log(String(number).split(''));
    let result = Number(String(number).split('').reverse().join(''));
   // let val= num.reverse();
    return result;
}
//Write a JavaScript function that returns a passed string with letters in alphabetical order.
console.log(rnumber(123456789))

let aplhaString=(alpha)=>
{   let  alphasort=alpha.toUpperCase();
    let data=alphasort.split(" ");
    console.log(data)
    console.log("Sorted array= "+data.sort());
    
}

console.log(aplhaString("My name is Tiwari"))

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

let upperString=(upperAlpha)=>
{   
    let data=upperAlpha.split(" ");
    console.log(data);
    for (let x of data)
    {
      //  console.log(x);
        let just=x.charAt(0).toUpperCase();
        let resutlt=just.concat(x.slice(1));
        console.log(`UPPERCASE LETTER IS ${resutlt}`);
    }
    // for( let i=0;i<upperAlpha.length;i++){
    //     console.log(upperAlpha[i])
    // }
}



console.log(upperString('hello how are You'))

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let typeString=(typealpha)=>
{  
     ;
    if(typeof typealpha !=='string')
    {
        console.log("enter a valid");
    }
    else{
         let array=typealpha.split(" ");
        let arrnum=[];
        console.log("typealpha",array)
         //array.find((val,index)=>Math.max(index))
        for(let i=0;i<array.length;i++){
            arrnum.push(array[i].length);
        }
       // console.log(arrnum);
      let maxnum= Math.max(...arrnum);
       console.log(array);
        console.log(maxnum);
        console.log(`longest word is ${array[arrnum.indexOf(Math.max(...arrnum))]}`);

    }
}

console.log(typeString("hello how You"))

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.


let vowel=(string1)=>{
    var allVowels = string1.match(/[aeiou]/gi);
if( allVowels != null ){
  var numberOfVowels = allVowels.length;
} else {
  var numberOfVowels = 0;  
}

console.log("NUMBER OF VOWEL"+numberOfVowels);

}

console.log(vowel('yyy i am here as per'))

//Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.


let country=(...array)=>
{   
    if( Array.isArray(array)){
        let data=array.toString();
        let arrydata=data.split(',');
        console.log("typealpha",arrydata)
        let arrnum=[];
        //array.find((val,index)=>Math.max(index))
       for(let i=0;i<arrydata.length;i++){
           arrnum.push(arrydata[i].length);
       }
      // console.log(arrnum);
     let maxnum= Math.max(...arrnum);
      console.log(array);
       console.log(maxnum);
       console.log(`longest word is ${arrydata[arrnum.indexOf(Math.max(...arrnum))]}`);
    }
    else{
        console.log("enter a valid output")
    }
}

console.log(country(['india','china','pakistan','usa']))

// Write a JavaScript program to pass a 'JavaScript function' as parameter.

let meet=()=> {
    return 'Hello';
}

let name=(user, func)=>
{

   
    const message = func();

    console.log(`${message} ${user}`);
}

name('John',meet);


//  Write a JavaScript function to get the function name.

function arguments() {
    //console.log( arguments );
    //console.log( arguments.callee );
    console.log( arguments.callee.name );
    //arguments.callee.name
}

arguments();

