/*
PROTOTYPE CHAIN
Herança e cadeia de protótipos

Classes x Prototype
JavaScript dinâmico e não dispõe de uma implementação de uma class (a palavra-chave class foi introduzida no ES2015, mas é syntax sugar, o JavaScript permanece baseado em prototype).

Prototype
Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado prototype.
O objeto prototype também tem um atributo prototype, e assim por diante até o valor null seja encontrado como sendo o seu prototype. O null que , por definição, não tem prototype, e age como um link final nesta cadeia de protótipos(prototype chain).

Quando um objeto é criado ele possui automaticamente uma propriedade que referência outro objeto e esse objeto é chamado de prototype.
O objeto prototype herda propriedades e métodos do se protótipo ascendente. Essas propriedades não pertencem ao objeto em si, mas sim ao prototype do objeto.
O prototype é o mecanismo pelo qual os objetos Javascript herdam recursos uns dos outros.
A cadeia termina quando chegamos a um protótipo que tem null por protótipo.
Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento do Protótipos.
*/