/*
O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript
*/
  "use strict"
function showMessage(){
  let personName = "Clara Santos"
  console.log("Olá", personName);  
}

showMessage()

class Student{
  get point(){
    return 7
  }
}

let student = new Student()
student.point = 10

//Quando passamos parâmetros duplicados
function sum(a, a, c){
  return a + a + c
}
const result = sum(1, 3, 2)
console.log(result);
