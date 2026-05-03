//(1) Executa o código de forma síncrona e o valor 1 e impressa imediatamente no console.
console.log(1)

//(3) Microtasks são executadas antes de temporizadores e promisses
queueMicrotask(() =>{
  console.log(2);  
})

//(5) Macrotask que aguarda o evento de temporizador ser acionado
setTimeout(() => {
   console.log(3);
   
}, 0);

//(2) Execução síncrona
console.log(4);



// (4) Adiciona uma microtask
Promise.resolve(true).then(() =>{
  console.log(5);
})