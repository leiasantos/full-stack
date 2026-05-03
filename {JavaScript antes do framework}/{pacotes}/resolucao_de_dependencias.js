/*
RESOLUÇÃO DE DEPENDÊNCIAS

Versionamento semântico
Padrão de atualização de versões que oferece um modelo fácil de entender o que mudou em uma versão.

          9     .      1     .      3
        Major        Minor        Patch
Major(versão Principal): aumenta quando são feitas alterações incompatpiveis. Isso significa que se você atualizar para uma nova versão principal, pode haver alterações que quebrarão a compatilidade com versões anteriores.
Minor(versão Menor): aumenta quando adicionadas novas funcionalidades de maneira compatível com versões anteriores. As atualizações de versão menor não devem introduzir alterações que quebram a compatibilidade com o código existente.
Patch(versão de Correção): aumenta quando são feitas de bugs compatíveis com versões anteriores. Isso significa que essas correções não devem introduzir novas funcionalidades ou quebrar a compatibilidade.

Convenções
O npm utiliza convenções para gerenciar a resolução de dependências e garantir que as instalações subsequentes mantenham a compatibilidade com as versões utilizadas na aplicação.

~ : O til permite atualizações automáticas para versões compatíveis. Isso permite receber patches e correções de bugs.

^ : O acento circunflexo indica que o npm pode instalar automaticamente a versão mais recente compatível, mas não a próxima versão incompatível. Isso permite receber patches, correções de bugs e pequenas alterações de versão, mas não grandes alterações de versão.

@ : quando você usa o @ antes da versão, indica uma versão exata. O npm instalará exatamente a versão especificada.

*/