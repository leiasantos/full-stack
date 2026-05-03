/*
${Hoisting🏗️}
hoisting (LEVANTAR OU IÇAR) se refere ao comportamento do interpretador de mover as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código.
Esse comportamento possibilita uma variável ou função antes que ela esteja definida.

hoisting  de variáveis: todas as declarações de variáveis são movidas para o topo do seu escopo independentemente de onde tenha sido declarada, ele estará disponível para uso em todo o escopo em que foi definida. Importante: mesmo que as declarações de variáveis sejam movidas para o topo do escopo, elas ainda precisam ser declaradas antes de serem utilizadas. Caso contrário, voCê receberá uma referência indefinida (undefined).

hoisting  de funções: todas as declarações de funções também são movidas para o topo do seu escopo. Isso significa que vocÊ pode chamar uma função antes mesmo de declará-la.
Essas características do javascript permite que vocÊ organize seu código de forma mais intuitiva, definindo as funções em qualquer ordem que desejar.

!Importante: 
Notar que embora o hoisting ocorra com var, seu uso tem algumas desvantagens, como a falta de escopo de bloco adequado e a possibilidade de levar a comportamentos inesperados.
Devido a essas desvantagens, recomenda-se o uso de let e const em vez de var, pois eles tem escopo de bloco e não são içados da mesma maneira que var.
*/