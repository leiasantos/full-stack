//FOR...OF itera sobre valores de um objeto iterável


let students = ["Clara","Julia","Paula"]

for(let student of students){
  console.log(student); 
}


let user = [
  {
    name: "Clara",
    email: "clara@gmail.com"
  },
]

for(let value of user){
  console.log(value.name);
  
}