/*
destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.
*/

const data = ["Bella Santos", "bella@gmail.com"]

//Desestruturando o array
const [username, email] = data

console.log("Nome:", username);
console.log("E-mail:", email);

const fruits = ["Qualquer coisa","Apple","Orange"]

const[banana ] = fruits
console.log(banana);

const [, apple]  = fruits
console.log(apple);

const [, ,orange] = fruits
console.log(orange);

