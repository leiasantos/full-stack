const form = document.querySelector("form")

form.onsubmit = (event) =>{
  event.preventDefault()
  console.log("Você fez submit no formulário #1");
  
}

form.addEventListener("submit", (event) =>{
    console.log("Você fez submit no formulário #2");
})