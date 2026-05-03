/*
EXPRESSÕES REGULARES
é utilizado para identificar se uma ocorrência ou padrão existe em uma string.
um padrão de expressão é composto por um conjunto de caracteres ou uma combinação de caracteres simples e especiais.
*/


const input = document.querySelector("input")
const form = document.querySelector("form")

/*input.addEventListener("input",() =>{
  const value = input.value

  const regex = /\D+/g

  // Retorna o padrão encontrado na string
 // console.log(value.match(regex));

 
 //Testa se atende o padrão.
 //const isValid = regex.test(value)
 //console.log(isValid);
  
})*/

form.addEventListener("submit", (event) =>{
 event.preventDefault()
 const value = input.value

 const regex = /\D+/g

 if(!regex.test(value)){
  alert("Valor inválido. Digite corretamente!")
 }


 //const value = input.value.replace(regex, "")
 //console.log(value);
  
})