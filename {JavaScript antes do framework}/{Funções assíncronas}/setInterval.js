// setInterval() executa uma função após um intervalo de tempo específicado.

let value = 10

const interval = setInterval(() => {
    console.log(value); 
    value--

    if(value === 0){
      console.log("FELIZ ANO NOVO!!");
      clearInterval(interval)      
    }
}, 1000);