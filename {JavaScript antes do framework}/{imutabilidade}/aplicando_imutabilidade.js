const address1 = {
  street: "Av. Brasil",
  number: 20
}

//Isso não é uma cópia, é uma referência
//const address2 = address1
//address2.number = 30


//Aqui estamos criando um novo objeto, utilizando as propriedades e valores de addres1. (Opção 1)
//const address2 = {...address1}
//address2.number = 30

const address2 = {...address1, number: 30}
console.log(address1, address2);

//Exemplo de referência de  Array
const list1 = ["Apple","Banana"]
//const list2 = list1
//list2.push("watermelon")

const list2 = [...list1]
list2.push("watermelon")

console.log(list1,list2);
