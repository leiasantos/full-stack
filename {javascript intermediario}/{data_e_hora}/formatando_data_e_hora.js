let date = new Date("2026-04-07T14:05:10")
console.log(date);

//Formata para o dia sempre ter 2 dígitos
let day = date.getDate().toString().padStart(2, "0")
console.log(day);

//Formata para o mês sempre ter 2 dígitos
let month = (date.getMonth() + 1).toString().padStart(2, "0")
console.log(month);

let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
let seconds = date.getSeconds()

console.log(`${day}/${month}/${year}`);

console.log(`${day}/${month}/${year} às ${hour}:${minute}:${seconds}`);
