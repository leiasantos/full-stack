const ul = document.querySelector("ul")

ul.addEventListener("scroll", () =>{
 if (ul.scrollTop > 200){
   //console.log("Fim da lista");

   ul.scrollTo({
    top: 0,
    behavior: "smooth",
   })
 }
 
})

const button = document.querySelector("button")
button.addEventListener("click", (event) =>{
  event.preventDefault()

  console.log("CLICOU!");
  
})