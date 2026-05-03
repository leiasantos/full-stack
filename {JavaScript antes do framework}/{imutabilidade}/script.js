/*
Imutabilidade
Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

Estratégia
Geralmente há duas maneiras de alterar dados. A PRIMEIRA é mutar  o dado alterando diretamente seu valor.
a segunda maneira é substituir o dado antigo por uma nova cópia com as alterações desejadas.

Na criação de interface
A imutabilidade é utilizada para otimizar a atualização do DOM(Document object Model) e para fornecer um modelo mais previsível no desenvolvimento de interfaces (ui).

Detectar mudanças}
Detectar mudanças e objetos mutados é dificil, como eles são modificados diretamente a detecção do que mudou exatamente requer um objeto mutado para ser comparado com as cópias das suas próprias versões anteriores e a árvore inteira do objeto para ser cruzada.
Detectar mudanças em objetos imutáveis é consideravelmente fácil. Se ele for diferente do anterior, concluímos que o objeto foi alterado.

*/