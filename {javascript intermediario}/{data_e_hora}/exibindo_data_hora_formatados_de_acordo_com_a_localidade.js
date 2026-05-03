let date = new Date("2026-04-07T14:05:10")

console.log(date)

//Exibe a data e hora no formato local.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

//Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))