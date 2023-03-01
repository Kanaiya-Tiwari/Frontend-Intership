
let fname=document.querySelector("#fname").value;
let lname=document.querySelector("#lname").value;

let phoneNumber=document.querySelector("#phoneNumber").value;
let email=document.querySelector("#email").value;
let orgainzationEmail=document.querySelector("#organization-email").value;
let password=document.querySelector("#password").value;
let salary=document.querySelector("#salary").value;


document.querySelector("#submit").addEventListener("click",(e)=>{
   
   
  // done validation for first name
  
  

  
  if(fname.trim()===" "){
    document.getElementById("fname-span").innerHTML="Please enter first name";
    
  }
  else if(fname.trim().length>15)
  {
    
    document.getElementById("fname-span").innerHTML="First name should not more than 15 letter ";

  }
  else if(!fname.trim().match(/^[a-zA-Z]*$/)){
    document.getElementById("fname-span").innerHTML="Enter valid first name";
  }
  else{
    //document.getElementById("fname-span").className="sucess";
    document.getElementById("fname-span").innerHTML="right fname";
    
  }



  // done validation for last name
  if(lname.trim()==" "){
    document.getElementById("lname-span").innerHTML="Please enter last name";
  }
  else if(lname.trim().length>15)
  {
    document.getElementById("lname-span").innerHTML="last name should not more than 15 letter ";

  }
  else if(!lname.trim().match(/^[a-zA-Z]*$/)){
    document.getElementById("lname-span").innerHTML="Enter valid last name";
  }
  else{
    document.getElementById("lname-span").className="sucess";
    document.getElementById("lname-span").innerHTML="";
  }



  // done validation for phone number
  if(phoneNumber.trim()==" "){
    document.getElementById("phone-span").innerHTML="Please enter number";
  }
  else if(!phoneNumber.trim().match(/^[69][0-9]{9}/))
  {
    document.getElementById("phone-span").innerHTML="Wrong phone number ";

  }
  else if(!phoneNumber.trim().length>10){
    document.getElementById("phone-span").innerHTML="Phone number not more than 10 digit";
  }
  else{
    document.getElementById("phone-span").innerHTML="";
    document.getElementById("phone-span").className="sucess";
  }

// done validation for simple mail
  if(email.trim()==" "){
    document.getElementById("email-span").innerHTML="Please enter email;";
  }
  else if(!email.trim().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/))
  {
    document.getElementById("email-span").innerHTML="Wrong email number ";

  }
  else{
    document.getElementById("email-span").className="sucess";
    document.getElementById("email-span").innerHTML="";
  }

  // valdation for orgainzation email

  if(orgainzationEmail.trim()==" "){
    document.getElementById("organization-email-span").innerHTML="Please enter email;";
  }
  else if(!orgainzationEmail.trim().match(/^[a-zA-Z0-9._-]+@1Rivet\.(com|in)$/))
  {
    document.getElementById("organization-email-span").innerHTML="Wrong email number ";

  }
  else{
    document.getElementById("organization-email-span").className="sucess";
    document.getElementById("organization-email-span").innerHTML="";
  }


  // valdation for slary

  if(salary.trim()==" "){
    document.getElementById("salary-span").innerHTML="Please enter salary;";
  }
  else if(!salary.trim()>5000)
  {
    document.getElementById("salary-span").innerHTML="Salary greter than 5000 ";

  }
  else{
    document.getElementById("salary-span").className="sucess";
    document.getElementById("salary-span").innerHTML="sucess";
  }



  // valdation for password

  if(password.trim()==" "){
    document.getElementById("password-span").innerHTML="Please enter password;";
  }
  else if(!salary.trim()>5000)
  {
    document.getElementById("password-span").innerHTML="Salary greter than 5000 ";

  }
  else{
    document.getElementById("password-span").className="sucess";
    document.getElementById("password-span").innerHTML="";
  }

});


