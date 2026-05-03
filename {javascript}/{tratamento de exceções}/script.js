/*
${tratamento de exceções}
uma exceção é uma condição ou evento imprevisto que ocorre durante o uso da aplicação que interrompe o fluxo normal de operações.
essas situações inesperadas podem incluir erros, condições de falha ou eventos que a aplicação não está preparada para lidar.
Exemplo:
Tentativa de abrir um arquivo que não existe ou falha na conexão com um banco de dados.

*/

/*try {
  //TENTA EXECUTAR ALGO.
  console.log(result);
} catch (error) {
  //CAPTURA O ERRO PARA TRATAR
 
 // console.log("Não foi possível executar");
  console.log(error);
  
}finally{
  console.log("fim");
  
}*/

let result = 0
try {
  if(result === 0){
     throw new Error("O valor é igual a zero.")
  }
} catch (error) {
  console.log(error);
  
}finally{
    console.log("fim");
}

//Exemplo simples
//Imagine que precisamos verificar se alguém é maior de idade (18 anos ou mais).

let idade = 16;

try {
  if (idade < 18) {
    throw new Error("Você é menor de idade.");
  }

  console.log("Você é maior de idade.");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Verificação finalizada.");
}