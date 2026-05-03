//O que é uma função construtora

function createProduct(name){
  const product = {}

  product.name = name
  product.details = function(){
    console.log(`O nome do produto é ${this.name}`);   
  }

  return product
}

//O new cria um novo objeto com a mesma estrutura da função construtora

const product1 = new createProduct("teclado")
console.log(product1.name);
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name);
product2.details()

//console.log(product1 === product2);


//Exemplo de funções construtoras disponiveis no próprio Javascript
let myName = new String("Clara")
console.log(myName);

let price = "40.6".replace(".","")
console.log(price);

let date = new Date("2026-1-1")
console.log(date);

function Person(name){
  this.name = name
  this.message = function(){
    console.log(`Olá, ${this.name}`);
    
  }
}
