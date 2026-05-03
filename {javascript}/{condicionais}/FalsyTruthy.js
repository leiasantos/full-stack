/*
Falsy e Truthy
Em JavaScript, os valores podem ser interpretados como true ou false quando usados em condições (if, while, operadores lógicos, etc.).
Esses valores são chamados de:
Truthy → valores que se comportam como true
Falsy → valores que se comportam como false
*/

console.log("### EXEMPLOS DE FALSY ###");
console.log(false ? "VERDADEIRO" : "FALSO");
console.log(0 ? "VERDADEIRO" : "FALSO");
console.log(-0? "VERDADEIRO" : "FALSO");
console.log("" ? "VERDADEIRO" : "FALSO");
console.log(null ? "VERDADEIRO" : "FALSO");
console.log(undefined ? "VERDADEIRO" : "FALSO");
console.log( NaN ? "VERDADEIRO" : "FALSO");

console.log("### EXEMPLOS DE TRUTHY###");
console.log( true ? "VERDADEIRO" : "FALSO");
console.log({} ? "VERDADEIRO" : "FALSO");
console.log([] ? "VERDADEIRO" : "FALSO");
console.log(1 ? "VERDADEIRO" : "FALSO");
console.log(3.23 ? "VERDADEIRO" : "FALSO");
console.log("ola" ? "VERDADEIRO" : "FALSO");
console.log("false" ? "VERDADEIRO" : "FALSO");
console.log(-1 ? "VERDADEIRO" : "FALSO");
console.log( Infinity ? "VERDADEIRO" : "FALSO");
console.log(-Infinity ? "VERDADEIRO" : "FALSO");

