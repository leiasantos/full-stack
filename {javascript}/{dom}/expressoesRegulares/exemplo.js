const form = document.querySelector("#form")

form.addEventListener("submit", function(e){
  e.preventDefault()

  const name = document.querySelector("#name").value
  const email = document.querySelector("#email").value
  const phone = document.querySelector("#phone").value
  const password = document.querySelector("#password").value

  const nameRegex = /^[a-zA-Z\s]+$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\d{11}$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/

  if(!nameRegex.test(name)){
    alert("Nome inválido")
    return
  }

  if(!emailRegex.test(email)){
    alert("Email inválido")
    return
  }

  if(!phoneRegex.test(phone)){
    alert("Telefone inválido")
    return
  }

  if(!passwordRegex.test(password)){
    alert("Senha inválida")
    return
  }

  alert("Formulário enviado com sucesso!")
})