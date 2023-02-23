"use strict";
const employee=[
    {"id": "1","firstNAme": "Vipul","lastName": "Yadav"},
    
    {"id": "2","firstNAme": "Ram","lastName": "Yadav"},
    
    {"id": "3","firstNAme": "Sam","lastName": "Yadav"}
];

let table=document.querySelector("table");
let data=Object.keys(employee[0]);

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
        for (const key in element) {
            let cell=row.insertCell();
     let text=document.createTextNode(element[key]);
     cell.appendChild(text);   
        }
     
    }
}

generateTableHead(table,data);
generateTableBody(table,employee);
console.log(data);  


