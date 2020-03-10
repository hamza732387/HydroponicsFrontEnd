var Name=document.getElementById("Name_Picture");
var Age=document.getElementById("Age_Picture");
var Location=document.getElementById("Location_Picture");
var Textarea=document.getElementById("codes _Picture");
var Script=document.getElementById("script_Picture");



let header = new Headers() 
header.append('content-type' , 'application/json');

function Add_New_Plant() {

fetch('http://localhost:3000/Hydroponics',{
    method : 'post',
    headers : header,
    body : JSON.stringify({
    
    name : Name.value,
    Age : Age.value,
 location :Location.value,
 script :  Script.value,
 codes :  codes.value,
    
    
    
    })
})

}





    var codes =document.getElementById("codes").value;
document.getElementById("output").innerHTML += "<br>" +codes;
