// Operador && (AND - E)
// Retorna true apenas se TODAS as condições forem verdadeiras
console.log("true && true :", true && true, "- retorna true porque as duas condições são verdadeiras")

console.log("true && false :", true && false, "- retorna false porque uma das condições é falsa")


// Operador || (OR - OU)
// Retorna true se PELO MENOS uma condição for verdadeira
console.log("true || false :", true || false, "- retorna true porque uma condição é verdadeira")

console.log("false || false :", false || false, "- retorna false porque nenhuma condição é verdadeira")


// Operador ! (NOT - NÃO)
// Inverte o valor lógico
console.log("!true :", !true, "- inverte true para false")

console.log("!false :", !false, "- inverte false para true")



let idade = 20
let temCarteira = true

console.log("AND (&&):", idade >= 18 && temCarteira)

console.log("OR (||):", idade < 18 || temCarteira)

console.log("NOT (!):", !temCarteira)