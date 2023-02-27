"use strict";

// window load eventv start here


const employee=["Id", "Name","Technology","Action"];
    
let table=document.querySelector("#table");


 
window.addEventListener("load",(e)=>{
    document.getElementById("update").disabled=true;
    document.getElementById("update").className="disabled";
    generateTableHead(table,employee);
    getEmployeeData("http://localhost:3000/employee/","load");
})


async function getEmployeeData(url,loadData){
    try{
        console.log("data");
        let res=  await fetch(url);
        let data= await res.json();
        // console.log(data);
        
        generateTableBody(data,loadData);
    }
    catch(error)
    {
        console.log(error)
    }    
}



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

function generateTableBody(data,loadData){
    
    var tbody=table.createTBody();
    if(loadData==='reload')
    { 
        table.childNodes[2].remove();    
    }

        for (const item of data) 
        {
            let row=document.createElement("tr");
            tbody.appendChild(row);
            let cell=document.createElement("td");
            let text1=document.createTextNode(item.id);
             cell.appendChild(text1);
              row.appendChild(cell);
             let cell2=document.createElement("td"); 
            let text2=document.createTextNode(item.name);
            cell2.appendChild(text2);  
            row.appendChild(cell2);
            let cell3=document.createElement("td");
            let text3=document.createTextNode(item.technology);
            cell3.appendChild(text3); 
            row.appendChild(cell3);
           let cell4=document.createElement("td");
            var editbtn=document.createElement("button");
            editbtn.className="edit";
            let editbuttonText=document.createTextNode("edit");
            editbtn.appendChild(editbuttonText);
            cell4.appendChild(editbtn);
            row.appendChild(cell4);
            var deletebtn=document.createElement("button");
            deletebtn.className="delete";
            let deletebtntext=document.createTextNode("delete");
            deletebtn.appendChild(deletebtntext);
            cell4.appendChild(deletebtn);
            row.appendChild(cell4);
            editbtn.onclick=()=>editEmployee(item.id,item.name,item.technology);
            deletebtn.onclick=()=>deleteEmployee(item.id);   
        }

    
} 


   

    function editEmployee(id,name,technology)
    {
        console.log("called");
        document.getElementById("name").value=name;
        document.getElementById("technology").value=technology;
        document.getElementById("save").disabled=true;
        document.getElementById("save").className="disabled";
        document.getElementById("update").disabled=false;
        document.getElementById("update").className="";
        
        fetch(`http://localhost:3000/employee/${id}`).then(respone=>respone.json()).then(data=>{sessionStorage.setItem("data2",JSON.stringify(data));}).catch(error=>console.log(error))
    }
    
    function deleteEmployee(id)
    {
        console.log(id);
        fetch(`http://localhost:3000/employee/${id}`, { method: 'DELETE' }).then(response=>response.json()).then(data=>
    {    
        console.log(data)
        alert("data deleted"); 
        getEmployeeData("http://localhost:3000/employee","reload");

    }
    ).catch(error=>console.log(error));

    } 



//  input data
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
    console.log("Inserted");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameData,technology:technologyData })
    };
    fetch('http://localhost:3000/employee', requestOptions)
    .then(response => response.json())
    .then(data =>
         {    alert("data enter");
            console.log(data);
            
             getEmployeeData("http://localhost:3000/employee","reload");
           
        
        }).catch(error=>console.log(error));
 
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
    document.getElementById("save").className="";
   
    let datavalue=JSON.parse(sessionStorage.getItem("data2"));
    let {id,name,technology}=datavalue;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameData,technology:technologyData })
    };
    fetch(`http://localhost:3000/employee/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => 
        {console.log(data);
            alert("data updated");
            getEmployeeData("http://localhost:3000/employee","reload");
           
        }).catch(error=>console.log(error));
    document.getElementById("update").disabled=true;
    document.getElementById("update").className="disabled";

}
})
