//Visualizar o conteúdo do document.
console.log(document);

//Obter o title da página
console.log(document.title);

//Acessar o elemento pelo #id (SELETOR ID)
const guest = document.getElementById("guest-2")

//Mostra as propriedades do objeto.
console.log(guest);

//Acessar elemento com class (SELETOR CLASS)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass);

//Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0));

//Selecionar lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag);




