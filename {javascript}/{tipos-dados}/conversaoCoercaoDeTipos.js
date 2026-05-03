/*
CONVERSÃO DE TIPOS (type casting ou type conversion): ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos especificos para realizar a conversão.

COERÇÃO DE TIPOS: ocorre de forma automática (implicitamente). O Javascript tenta automaticamente converter um dos valores para um tipo compativel antes de realizar a operação.

*/

//!CONVERSÃO DE TIPOS
let value = "9"
console.log(typeof value);
console.log(typeof Number(value));

let age = 18
console.log(typeof age.toString());
console.log(typeof String(age));

let option = 1
console.log(typeof Boolean(option));

//TODO COERÇÃO DE TIPOS
console.log("10" + 5);
