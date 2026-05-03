/*
OPTIONAL CHAINING(?.) - encadeamenti opcional 
Se a propriedade ou função chamada é nullish (nuçç or undefined), a expressão retorna undefined em vez de gerar um erro.

Útil ao explorar o conteúdo de um objeto quando não existe garantica da existência de determinadas propriedades obrigatórias.

*/

const user = {
  id: 1,
  name: "Clara",
  address: {
    street: "Avenida das Rosas",
    city: "São Paulo",
    geo:{
      latitude: 47.8080,
      longitude: 17.5674,
    },
  },
  message: function(){
    console.log(`Olá, ${this.name}!`)  
  },
}

console.log(user)
console.log(user.name)
console.log(user?.address?.street)