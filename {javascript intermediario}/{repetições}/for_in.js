//FOR...IN executa iterações a partir de um objeto e percorre as propriedades.

let person = {
  name: "Clara",
  surname: "Santos",
  email: "clara@gmail.com"
}

let steps = 1

for(let property in person){
  console.log(steps);

  //Exibe o nome da propriedade
  console.log(property);

  //Exibe o conteúdo da propriedade
  console.log(person[property]);

  steps++;
}

let students = ["Clara","Julia","Paula"]

for(let student in students){
  console.log(student); 
}