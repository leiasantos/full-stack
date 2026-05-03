function asyncFunction () {
  return new Promise((resolve, reject) => {
   //Simula uma operação assíncrona
   setTimeout(() =>{
   const isSuccess = true
   
    if(isSuccess){
      resolve("A operação foi concluída com sucesso!")
    }else{
      reject("Algo deu errado!")
    }

  }, 3000) // Simula uma operação que leva 3 segundo
   })
}

async function fetch(){
  try {
   const response = await asyncFunction() 
   console.log("Sucesso:", response);
   
  } catch (error) {
    console.log("Erro:", error);
    
  }finally{
    console.log("Fim da execução");    
  }    
}

fetch()

/*

const fetch = async () =>{
  const response = await asyncFunction()
  console.log(response);  
}
fetch()

*/

