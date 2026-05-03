let message = "Estou estudando os fundamentos do JavaScript."
console.log(message);

//!Métodos de formatação
//toUpperCase(): Transforma em maiúsculo.
console.log(message.toUpperCase());

//toLowerCase(): Transforma em minúsculo.
console.log(message.toLowerCase());

//Comprimento de uma String
console.log(message.length);

let password = "12345"
if(password.length < 6){
  console.log("A senha deve ter ao menos 6 caracteres."); 
}

//Quantos dígitos tem um número
let value = 12345
console.log(String(value).length);
console.log(value.toString().length);

//Substituindo e fatiando um texto

//Substituindo parte de um texto
console.log(message.replace("JavaScript","HTML"));

//Extraindo uma parte da string (start, end)
console.log(message.slice(0,5));
console.log(message.slice(6,30));

//Extraindo uma parte da string de trás para frente
console.log(message.slice(-11));


//Remove espaços em branco no inicio e no final da string
let textWithSpace = "   Texto de exemplo   "
console.log(textWithSpace.length);
console.log(textWithSpace.trim());


//Completando uma string
const creditCard = "1234567812344928"
console.log(creditCard.length);

//pega os 4 últimos dígitos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits);

//O padStart preenche a string do inicio
const maskedNumber = lastDigits.padStart(creditCard.length,"X")
console.log(maskedNumber);

//O padEnd preenche a string no final
const number = "123"
console.log(number.padEnd(10, "#"));

//Separando e unindo strings
//separar a string
let text = "Estudar, Aprender, Praticar"
let separate = text.split(",")
console.log(separate);

let messagem = "Estou aprendendo Javascript"
console.log(messagem.split(" "));

//Unir a String
let joined = separate.join(" - ")
console.log(joined);

//Encontrando um conteúdo no texto

//Obter a posição da palavra
console.log(message.indexOf("estudando"));
console.log(message.indexOf("JavaScript"));

//Verificar se existe a palavra na String
console.log(message.includes("JavaScript"));

console.log(message.includes("HTML"));

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
