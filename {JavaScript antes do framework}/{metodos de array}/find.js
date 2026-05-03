/*
O método find() retorna o valor do primeiro elemento do array que satisfazer a consição. Caso contrário, undefined é retornado
*/

const values = [5, 12, 8, 130, 44]

//Retorna o primeiro elemento que valor é maior que 10
const found = values.find((value) => value > 10)
console.log(found);

const fruits =[
  {name:"apples" , quatity: 23},
  {name:"bananas" , quatity: 25},
  {name:"oranges" , quatity: 52},
]

const result = fruits.find((fruit) => fruit.name === "bananas")
console.log(result);
