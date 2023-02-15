let obj={
    1:"hello",
    2:"data",
    3:"value"
}

//const data1 =Object.values(obj);
//console.log(data1);


// Write a JavaScript function to retrieve all the values of an object's properties.
let  objvalue=(valuesdata)=>
{
    return Object.values(valuesdata);
}
const data1=objvalue(obj);
console.log(data1);
//console.log("The object value is "+{data1});




//Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

let objentries=(valuesent)=>
{
    return Object.entries(valuesent);
}
const data2=objentries(obj);
console.log(data2);

// let data2=Object.entries(obj);
// console.log(data2);



//Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

let objectreasign=(resign)=>{
    let newObj={};
    for (const key in resign) {
        newObj[resign[key]]=key;
            
        }
    return newObj;
    
}
const data3=objectreasign(obj);
console.log(data3);




//Write a JavaScript program to find the most frequent item of an array.

function frequent(array)
{
    let max=0;
let max_value;
for( let i=0;i<array.length;i++)
{
    let count=0;
    for (let j=0;j<array.length;j++)
    {
   
    if(array[i]==array[j]){
        count=count+1;
    }
    if(count>max){
        max=count;
        max_value=array[i];
        //console.log(max_value);
    }
}
}
//console.log(`max value is ${max_value}`);
return max_value;
}


const new_data=frequent([1,2,3,2,6,8]);
console.log(`Most frequent array is ${new_data}`);



//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

let removeduplicate=(data1)=>
{    return [...new Set(data1)];

}
let result1=removeduplicate([2,3,4,"4",4,"hello","a",1,2,3,4,"hello","hii"])
console.log(result1);




//Write a JavaScript function to merge two arrays and removes all duplicates elements.

let removeduplicatemerg=(data1,data2)=>
{
    const join=data1.concat(data2);
    return [...new Set(join)];

}
let result2=removeduplicatemerg([2,3,4,"4",4,"hello","a"],[1,2,3,4,"hello","hii"])
console.log(result2);



//Write a JavaScript function to remove a specific element from an array.

let removeSpecific=(index)=>
{
    let array=[1,2,3,4,5,6,7,8];
    let remove=array.splice(index,1);
   // console.log(`remove is any element ${remove}`);
    return array;
}
let result3=removeSpecific(3);
console.log(result3);



//Write a JavaScript function to get a random item from an array.[1,2,3,4,5,6,7,8,9,10]
let random=(data)=>{
    const randomdata=Math.floor(Math.random()*data.length);
   // console.log(`random value is ${randomdata}`);
    return data[randomdata]
}

const result4=random([1,2,3,4,5,6,7,8,9,10]);
console.log(`random value is ${result4}`);



//Write a JavaScript function to filter false, null, 0 and blank values from an array.[58, '', 'abcd', true, null, false, 0]

let removefalse=(data)=>{
        return data.filter(value=>{
            if (value!==false || value!==null || value !== 0 || value !== "")
            {   
                // console.log(`value is ${value}`);
                return value;
            }
         

        })
}
let result5=removefalse([58,'',"abcd",true,null,false,0]);
console.log(result5);