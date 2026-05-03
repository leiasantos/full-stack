//IF 
let hour = 11

if(hour <= 12){
  console.log("Bom dia!"); 
}

// IF ELSE
let age = 23
if(age < 18){
console.log("Você não pode dirigir!");
  
}else{
  console.log("Você pode dirigir!");
}

//IF ELSE IF

let hours = 19
/*
if (hours <= 12) {
  console.log("Bom dia!");
  
} else if (hours > 18){
    console.log("Boa noite");
}else{
  console.log("Boa tarde");
}*/

if (hours <= 12) {
    console.log("Bom dia!")
} else if(hours > 12 && hours <= 18) {
    console.log("Boa tarde")
}else{
 console.log("Boa noite")
}