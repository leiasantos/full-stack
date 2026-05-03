const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author:{
    name: 'Bella',
    email: 'bella@gmail.com',
  },
}

function deepFreeze(object){
  //Obtém um array com todas as propriedades do objeto
  const props = Reflect.ownKeys(object)
  
  //Itera sobre todas as propriedades do objeto
  for(const prop of props){
    //Obtém o valor associado a propriedade atual
    const value = object[prop]
    
    //verificar se o valor é um objeto ou função para continuar aplicando o deepfreeze de objetos aninhados
    if(value && typeof value === "object" || typeof value === "function"){
      deepFreeze(value)
    }
  }

  //Retorna o objeto congelado
  return Object.freeze(object)
}

//Chama a function para congelar o objeto com depp freze
deepFreeze(book)
book.category = "HTML"
book.author.name = "Bruno"

console.log(book);


