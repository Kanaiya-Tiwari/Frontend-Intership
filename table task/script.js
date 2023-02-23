"use strict";

// window load eventv start here


window.addEventListener("load",(e)=>{
  fetch("http://localhost:3000/employee").then(respone=>respone.json()).then(data=>sessionStorage.setItem("data",JSON.stringify(data))).catch(error=>console.log(error));
 document.getElementById("update").disabled = true;

// const employee=[
//     {"id": "1","NAme": "Vipul","technology": "Java","action":""},
// ];
const employee=["id", "NAme","technology","Action"];
let table=document.querySelector("table");
// let data=Object.keys(employee[0]);

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
    for (const element of data)
     {
        let row=tbody.insertRow();
        var btn1=document.createElement("button");
        btn1.setAttribute("id","edit");
        btn1.innerText="Edit";
        var btn2=document.createElement("button");
        btn2.setAttribute("id","delete");
        btn2.innerText="Delete";
        for (const key in element) {
            let cell=row.insertCell();
            let text=document.createTextNode(element[key]);
            
            cell.appendChild(text);   
            cell.appendChild(btn1);
            cell.appendChild(btn2);
           
        }
      
     
    }
  

    document.querySelectorAll("#edit").forEach(box => {
        box.addEventListener('click', (event) =>{
          console.log('box clicked');
          console.log(event.target.parentElement.previousSibling.previousSibling.innerText);
        //   console.log(arguments);
        let name=event.target.parentElement.previousSibling.previousSibling.innerText;
        let technology=event.target.parentElement.previousSibling.innerText;
     
      console.log(event.target);
        let id=event.target.parentElement.childNodes[0].textContent;
        console.log(id);
        console.log(name);
        console.log(technology);
        let datavalue={id:id,name:name,technology,technology};
        console.log(datavalue);
        // console.log(String(technology));
        document.getElementById("name").value=name;
        document.getElementById("technology").value=technology;
        document.getElementById("save").disabled=true;
        document.getElementById("update").disabled=false;
        // let datavalue={id:id,name:name,technology,technology};
        // console.log(datavalue);
        sessionStorage.setItem("data2",JSON.stringify(datavalue));
        
       
        });
      });
    

      document.querySelectorAll("#delete").forEach(box => {
        box.addEventListener('click', (event) =>{
          console.log('box clicked');
          let id=event.target.parentElement.childNodes[0].textContent;
          console.log(id);
          fetch(`http://localhost:3000/employee/${id}`, { method: 'DELETE' }).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error));
        });
      });
      
}
let data1=JSON.parse(sessionStorage.getItem("data"));
console.log(data1);
generateTableHead(table,employee);
generateTableBody(table,data1);
})

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
// document.getElementById("name").oninput=function(e){
//     console.log(e.target.value);
//     if(e.target.value)
//     {
        
//         window.addEventListener('beforeunload', (event) => {
    
//        return event.returnValue="something random";
//      });
//     }
    
// }



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
    .then(data => console.log(data)).catch(error=>console.log(error));
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



//console.log(data);  