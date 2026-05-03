let a = 10;     // inteiro
let b = 10.5;   // decimal
let c = -10; // inteiro negativo

console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof c); // number

//🧮 Operações matemáticas
let n1 = 10;
let n2 = 5;

console.log(n1 + n2); // soma
console.log(n1 - n2); // subtração
console.log(n1 * n2); // multiplicação
console.log(n1 / n2); // divisão
console.log(n1 % n2); // resto (módulo)
console.log(n1 ** n2); // potência

//⚠️ Problema com casas decimais
console.log(0.1 + 0.2); // 0.30000000000000004 😱

//👉 Isso acontece por causa da precisão binária

//✔️ Solução:
console.log((0.1 + 0.2).toFixed(2));// "0.30"

//🔁 Conversão de tipos
//➡️ String → Number
console.log(Number("10"));
console.log(parseInt("10"));
console.log(parseFloat("10.5"));

//⚠️ Diferença:
console.log(parseInt("10.9"));
console.log(Number("10.9"));


// ===============================
// 🔢 NUMBER EM JAVASCRIPT (GUIA COMPLETO)
// ===============================

// ===============================
// 🧩 TIPO NUMBER
// ===============================
console.log("Tipo:", typeof 10); // number
console.log("Tipo:", typeof 10.5); // number


// ===============================
// 🔁 CONVERSÃO PARA NUMBER
// ===============================
console.log("Number('10'):", Number("10")); // converte string para number
console.log("parseInt('10.9'):", parseInt("10.9")); // pega apenas inteiro
console.log("parseFloat('10.9'):", parseFloat("10.9")); // pega decimal


// ===============================
// ❌ VALORES ESPECIAIS
// ===============================
console.log("NaN:", "abc" / 2); // NaN (Not a Number)
console.log("isNaN:", isNaN("abc" / 2)); // true

console.log("Infinity:", 10 / 0); // Infinity
console.log("-Infinity:", -10 / 0); // -Infinity


// ===============================
// 🧠 MÉTODOS DE NUMBER
// ===============================

let num = 123.456;

// 🔸 toFixed() → define casas decimais
console.log("toFixed(2):", num.toFixed(2)); // "123.46"

// 🔸 toPrecision() → total de dígitos
console.log("toPrecision(4):", num.toPrecision(4)); // "123.5"

// 🔸 toString() → converte para string
console.log("toString():", num.toString()); // "123.456"

// 🔸 valueOf() → retorna valor primitivo
let objNumber = new Number(50);
console.log("valueOf():", objNumber.valueOf()); // 50


// ===============================
// 🔍 PROPRIEDADES DO NUMBER
// ===============================
console.log("MAX_VALUE:", Number.MAX_VALUE); // maior número possível
console.log("MIN_VALUE:", Number.MIN_VALUE); // menor número positivo
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // inteiro seguro máximo
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // inteiro seguro mínimo


// ===============================
// ✅ VERIFICAÇÕES
// ===============================
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isInteger(10):", Number.isInteger(10)); // true
console.log("Number.isInteger(10.5):", Number.isInteger(10.5)); // false
console.log("Number.isFinite(100):", Number.isFinite(100)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isSafeInteger(100):", Number.isSafeInteger(100)); // true


// ===============================
// ⚠️ PROBLEMA DE PRECISÃO
// ===============================
console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004 😱
console.log("Corrigido:", (0.1 + 0.2).toFixed(2)); // "0.30"


// ===============================
// 🧮 OBJETO MATH (RELACIONADO)
// ===============================

// 🔸 Arredondamento
console.log("Math.round(4.6):", Math.round(4.6)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5

// 🔸 Máximo e mínimo
console.log("Math.max:", Math.max(10, 20, 5)); // 20
console.log("Math.min:", Math.min(10, 20, 5)); // 5

// 🔸 Número aleatório
console.log("Math.random():", Math.random()); // entre 0 e 1

// 🎯 Aleatório de 1 a 10
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);


// ===============================
// 🔁 COMPARAÇÃO
// ===============================
console.log("10 == '10':", 10 == "10"); // true (converte)
console.log("10 === '10':", 10 === "10"); // false (tipo diferente)


// ===============================
// 💰 EXEMPLO REAL (DINHEIRO)
// ===============================
let preco = 19.9;
let quantidade = 3;

let total = preco * quantidade;

console.log("Total:", total); // 59.699999...
console.log("Total formatado:", total.toFixed(2)); // "59.70"


// ===============================
// 🚀 BIGINT (NÚMEROS MUITO GRANDES)
// ===============================
let grande = 123456789012345678901234567890n;
console.log("BigInt:", grande);


// ===============================
// 🎯 FIM DO GUIA
// ===============================