/*
Caracteristicas:
single threaded: executa uma coisa por vez
no-blocking: não trava o contexto da execução
asynchronous: por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas.
concurrent: as tarefas que executam asspincronamente concorrem uma com as outras pelo processamento.

Concorrência e Event Loop
O Javascript possui um modelo de concorrência baseado em um event loop responsávek por gerenciar a execução de código assíncrono e eventos em um único thread, permitindo que o JavaScript seja não bloqueante.

Event Loop
Tudo passa pela Call Stack. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stack sem fazer nada e será resolvida em alguma Web API.
O Event Loop é quem fica chegando constantemente a Call Stack e Callback Queue.

Micro e Macro Tasks
Existem dois tipos principais de tarefas na fila de callback

Microtasks:
São tarefas de alta prioridade que são executadas antes das Macrotasks(temporizadores e promises)

Macrotasks:
São tarefas de menor prioridade, como callbacks de eventos, setTimeout e setInterval.

RESUMO
* 1 Execução de código: O código síncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário

* 2 Eventos Assíncronos: Quando ocorrem eventos assincronos, como uma requisição concluída, o callback correspondente é enfileirado na fila de callback.

* 3 Verificação do Event Loop: O Event Loop verifica a pilha de chamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila de callback para a pilha de chamadas.

* 4 Microtesks: Antes de verificar novamente a fila de callback, o Event Loop executa todas as microtasks pendentes.
*/