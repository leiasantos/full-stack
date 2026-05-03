let fruits = ['Apple','Pineapple','watermelon','Banana','Grapes','Orange']
console.log(fruits)


//Encontra e retorna o índice do elemento no Array
let position = fruits.indexOf("Apple")
console.log(position)

fruits.splice(position, 1)
console.log(fruits)


fruits.splice(1,3)
console.log(fruits)
