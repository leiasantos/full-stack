let nome; // Declarada, mas sem valor
console.log(nome); // undefined

function saudacao(texto) {
  console.log(texto);
}
saudacao(); // O parâmetro 'texto' será undefined porque não foi enviado

let usuario = null; // Eu decidi que, por enquanto, não há usuário