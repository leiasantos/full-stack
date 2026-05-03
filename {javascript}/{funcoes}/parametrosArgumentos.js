/*
Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função.
Argumentos: é o valor que é passado para a função.
*/

//Passando o parâmetro username
function message(username) {
 console.log("Olá", username);
}

//Passando argumentos
message("Clara")

function sum(a, b){
  console.log(a + b);
}

sum(10,20)
sum(7,3)