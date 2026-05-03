/*
console.log(user);
var user = "Clara"
*/
// Hoisting
var user = "Clara"
console.log(user);

//Escopo global
var email = "clara@gmail.com"
{
  //Escopo de bloco
  console.log(email);
  
}

{
  var age = 18
}

console.log(age);
