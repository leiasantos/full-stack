const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author:{
    name: 'Bella',
    email: 'bella@gmail.com',
  },
}

const updateBook = {
  ...book,
  title: "Front-end moderno",
  category: "HTML",
  type: "Programming",
}

//Original intacto
console.log(book);

//Modificado
console.log(updateBook);

//Utilizando operador de desestruturação (rest operator) para remover propriedades.
const {category, ...updateBook2} = book
console.log(updateBook2);


