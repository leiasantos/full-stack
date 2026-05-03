const input = document.querySelector("input")

//keydown - quando uma tecla é pressionada(captura tudo, incluindo CTRL, SHIFT, etc.)
/*input.addEventListener("keydown",(event) =>{
  event.preventDefault()
  console.log(event.key);
  
})*/

//keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input.addEventListener("keypress",(event) =>{
   event.preventDefault()
   console.log(event.key);
})

input.addEventListener("change",(event) =>{
   event.preventDefault()
   console.log("O input mudou");
})