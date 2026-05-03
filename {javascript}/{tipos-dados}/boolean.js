console.log(typeof true);
console.log(typeof false);

let isLoading = true
console.log(isLoading);

const deNoite = true;
const deDia = false;

// O resultado de uma comparação sempre será um boolean
const saldo = 100;
const itemCaro = saldo > 500; // Retorna false

let usuarioLogado = true;
let temAcesso = false;

if (usuarioLogado && !temAcesso) {
    console.log("Por favor, assine o plano para ver este conteúdo.");
} else if (usuarioLogado && temAcesso) {
    console.log("Bem-vindo à sua área exclusiva!");
} else {
    console.log("Por favor, faça login.");
}