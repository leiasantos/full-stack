/*
Rest params (...) permite representar um número indefinido de argumentos como array
*/

function values(a, ...rest){
  //Mostra a quantidade de parâmetros.
  console.log(rest.length)

 //Exibindo o conteúdo do array
  console.log(...rest)

    //Exibe o conteúdo do rest que é um array.
  console.log(rest)  
}
values(2, 1, 3, 4)


function somar(...numeros) {
  let total = 0

  for (let num of numeros) {
    total += num
  }

  return total
}

console.log(somar(1, 2, 3, 4)) // 10