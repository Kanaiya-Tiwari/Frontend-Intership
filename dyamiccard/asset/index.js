const employee = [
  {
    name: "twitter",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    btn:"Read more"
},
  {
    name: "instragram",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    btn:"Read more"
},
  {
    name: "youtube",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    btn:"Read more"
    },
];

const h2data1 = document.querySelector(".card-one-h2");
const h2data2 = document.querySelector(".card-two-h2");
const h2data3 = document.querySelector(".card-three-h2");
const text1 = document.createTextNode(employee[0].name);
const text2 = document.createTextNode(employee[1].name);
const text3 = document.createTextNode(employee[2].name);
h2data1.appendChild(text1);
h2data2.appendChild(text2);
h2data3.appendChild(text3);


const span1=document.querySelector(".card-one-span");

const span2=document.querySelector(".card-two-span");

const span3=document.querySelector(".card-three-span");
spantext1=document.createTextNode(employee[0].data);
spantext2=document.createTextNode(employee[1].data);
spantext3=document.createTextNode(employee[2].data);
span1.appendChild(spantext1);
span2.appendChild(spantext2);
span3.appendChild(spantext3);

const btn1=document.querySelector(".card-one-button");
const btn2=document.querySelector(".card-two-button");
const btn3=document.querySelector(".card-three-button");
btn1text=document.createTextNode(employee[0].btn);
btn2text=document.createTextNode(employee[1].btn);
btn3text=document.createTextNode(employee[2].btn);

btn1.appendChild(btn1text);
btn2.appendChild(btn2text);
btn3.appendChild(btn3text);
























// const h2data=document.querySelectorAll("h2");
// console.log(h2data);

//console.log(h2data);
// for (const element of employee) {

//        // const text=document.createTextNode(element[key]);
//      //   h2data[0].innerText=element[key];
//         for (let i=0;i<h2data.length;i++)
//         {
//              for (const key in element )
//             {
//                 if(key==="name"){
//             h2data[i].appendChild(element[key]);
//         }}
//         }
//         // console.log(text);
//         //    h2data1.appendChild(text);
//         //    h2data2.appendChild(text);
//         }
