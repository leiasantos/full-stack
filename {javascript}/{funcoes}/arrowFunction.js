//Arrow Function (função de seta)
const showMessage = () =>{
  console.log("Olá");
}

console.log(showMessage);
showMessage()

const showMessage2 = (username, email) =>{
  //console.log("Olá, ", username);
  console.log(`Olá, ${username}. Seu e-mail é: ${email}.`);
  
}

showMessage2("Clara","clara@gmail.com")

