
let currentAddress = window.location.href;

let currentURL = new URL(window.location.href);


let searchParams = new URLSearchParams(currentURL.search);


let fname = searchParams.get("fname");
let lname = searchParams.get("lname");
let email = searchParams.get("email");
let Mr = searchParams.get("Mr");
let Ms = searchParams.get("Ms");
let birthday = searchParams.get("birthday");
let age = searchParams.get("resultBday");


console.log("Firstname: " + fname);
console.log("Lastname: " + lname);
console.log("E-mail: " + email);
console.log("age: " + age);
//console.log(Mr);
//console.log(Ms);
console.log("Birthdate: " + birthday);

if(Mr == null){
    console.log("No entry for MR")
}
else{
    console.log("MR")
}
if(Ms == null){
    console.log("No entry for MS")
}
else{
    console.log("MS")
}