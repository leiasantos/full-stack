/*
spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.
*/

const numbers = [1, 2, 3]
console.log(numbers);

//spread
console.log(...numbers);


const data = [
  {
    name: "Clara",
    email: "clara@gmail.com",
    avatar: "r.png",
  },

    {
    name: "Bella",
    email: "bella@gmail.com",
    avatar: "b.png",
  }
]

console.log(data);
console.log(...data);

