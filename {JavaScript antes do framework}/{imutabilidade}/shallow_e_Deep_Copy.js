/*
Shallow copy (cópia superficial): não pega os itens aninhados
*/

const htmlCourse = {
  course: "HTML",
  students:[{name: "Rodrigo", email: "rodrigo@gmail.com"}],
}
/*
const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
}*/

//Vai modificar o htmlCourse também é uma referência e não uma cópia
//jsCourse.students.push({name: "Bella", email: "bella@gmail.com"})

//Deep Copy
const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
  students:[...htmlCourse.students,{name: "Bella", email: "bella@gmail.com"}]
}

jsCourse.students.push({name: "Bruno", email: "bruno@gmail.com"})





console.log(htmlCourse, jsCourse);
