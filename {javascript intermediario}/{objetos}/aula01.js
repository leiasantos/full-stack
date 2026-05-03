/*
OBJETO
- Uma coleção de dados e/ou funcionalidades;
- Podem ter propriedades e métodos;
*/

//Criando um objeto vazio
const obj = {}
console.log(obj);

//Criando um objeto com propriedades e métodos
const user = {
  email: "clara@gmail.com",
  age: 20,
    name: {
      first_Name: "Clara",
      surname: "Santos",
    },

    address:{
      street: "Rua das Rosas",
      number: 28,
      city: "São Paulo",
      postal_code: "03977-710"
    },

    message: () =>{
      console.log("Oi Clara")    
    },   
}

//Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);

//Acessando propriedade de objetos
console.log(user.name.first_Name);

//Executa o método do objeto
user.message()

//Notação de colchetes
console.log(user["email"]);
console.log(user["name"]["first_Name"]);

console.log();
