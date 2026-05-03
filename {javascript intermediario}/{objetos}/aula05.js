/*
OPERADOR DE COALESCÊNCIA NULA(??)
Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let content = null
console.log(content ?? "Conteúdo padrão");

const user = {
  name: "Bella",
  picture: undefined
}

console.log(user.picture ?? "default.png");
