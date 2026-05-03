const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author:{
    name: 'Bella',
    email: 'bella@gmail.com',
  },
}
//O Javascript em si não impõe restrições à modificação dos objetos.
//book.category = 'HTML'

//Congela o objeto e impede a modificação
Object.freeze(book)
book.category = "CSS" //Não modifica

//Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing)
book.author.name = 'Clara'

console.log(book);
