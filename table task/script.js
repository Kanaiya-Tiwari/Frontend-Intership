"use strict";



//

document.addEventListener("DOMContentLoaded",(e)=>{
    alert("please vait will data is loaded");
})
//

// window load eventv start here

fetch("http://localhost:3000/employee").then(respone=>respone.json()).then(data=>sessionStorage.setItem("data",JSON.stringify(data))).catch(error=>console.log(error));

window.addEventListener("load",(e)=>{
 
    
 document.getElementById("update").disabled = true;

})

//let form=document.querySelector("form");
const employee=["id", "NAme","technology","Action"];
let table=document.querySelector("#table");


let observer= new MutationObserver((data)=>{
    console.log(data);
    fetch("http://localhost:3000/employee").then(respone=>respone.json()).then(data=>sessionStorage.setItem("data",JSON.stringify(data))).catch(error=>console.log(error));
})

observer.observe(table,{
    childList:true
})

function generateTableHead(table,data){
    let thead=table.createTHead();
    let row=thead.insertRow();
    for (const key of data) {
        let th=document.createElement('th');
        let text=document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);   
    }
}

function generateTableBody(table,data){
    let tbody=table.createTBody();
    data.map((item)=>{
        let row=tbody.insertRow();
        //var btn1=document.createElement("button");
        let cell=row.insertCell();
             let text1=document.createTextNode(item.id);
             cell.appendChild(text1);  
             let text2=document.createTextNode(item.name);
             cell.appendChild(text2);  
             let text3=document.createTextNode(item.technology);
             cell.appendChild(text3);  
             var btn1=document.createElement("button");
        btn1.setAttribute("id",item.id);
        btn1.innerText="Edit";
        var btn2=document.createElement("button");
        btn2.setAttribute("id",item.id);
        btn2.innerText="Delete";
        cell.appendChild(btn1);
          cell.appendChild(btn2);
          
          btn1.onclick=()=>showfunction(item.id,item.name,item.technology);
          btn2.onclick=()=>showfunction2(item.id); 
               
    })


    function showfunction(id,name,technology)
    {
        console.log("key"+id);
        console.log("key"+name);
        console.log("key"+technology);
        let datavalue={id:id,name:name,technology,technology};
        document.getElementById("name").value=name;
        document.getElementById("technology").value=technology;
        document.getElementById("save").disabled=true;
        document.getElementById("update").disabled=false;
        sessionStorage.setItem("data2",JSON.stringify(datavalue));
    }
    
    function showfunction2(id)
    {
        console.log('box clicked');
        
        console.log(id);
        fetch(`http://localhost:3000/employee/${id}`, { method: 'DELETE' }).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error));

    } 
}
let data1=JSON.parse(sessionStorage.getItem("data"));
console.log(data1);
generateTableHead(table,employee);
generateTableBody(table,data1);



// window load event event here    

// a type of validation start here



document.getElementById("name").oninput=function(e){
    console.log(e.target.value);
    if(e.target.value)
    {
        
        window.addEventListener('beforeunload', (event) => {
    
       return event.returnValue="something random";
     });
    }
    
}


document.getElementById("technology").oninput=function(e){
    console.log(e.target.value);
    if(e.target.value)
    {
        
        window.addEventListener('beforeunload', (event) => {
    
       return event.returnValue="something random";
     });
    }
    
}


// a type of validation end here

// input data
document.getElementById("save").addEventListener("click",(e)=>{
    let nameData=document.getElementById("name").value;
let technologyData=document.getElementById("technology").value;
    console.log(nameData);
    console.log(technologyData);
if(nameData==="" || technologyData==="")
{
    alert("enter value");
}
else{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameData,technology:technologyData })
    };
    fetch('http://localhost:3000/employee', requestOptions)
    .then(response => response.json())
    .then(data =>
         {
            console.log(data);
           
        
        }).catch(error=>console.log(error));
     alert("data enter");
}

})

// save event end here

// update event end here
document.getElementById("update").addEventListener("click",(e)=>{
    let nameData=document.getElementById("name").value;
    let technologyData=document.getElementById("technology").value;
if(nameData==="" || technologyData==="")
{
    alert("enter value");
}
else{
    document.getElementById("save").disabled=false;
   
    let datavalue=JSON.parse(sessionStorage.getItem("data2"));
    let {id,name,technology}=datavalue;
    console.log("id is "+id);
    console.log("name is"+nameData);
    console.log("technology is"+technologyData);
    //console.log(data);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameData,technology:technologyData })
    };
    fetch(`http://localhost:3000/employee/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => 
        {console.log(data);
            // if(data)
            //{
             //   window.location.reload();
           // }
        }).catch(error=>console.log(error));
    document.getElementById("update").disabled=true;

}
})
