---
Title: Páginas
---

<script setup>

</script>

## InicioView

    Páginas de de visualização incial de aplicação, contém dados do menu e seu controle, load incial do dados da API principal, como itens, cores, tamanhos entre outros.

    Aqui também é improtado os componentes principais componentes da aplicação, como: Pesquisa, ItemCard, ChatBotIa.

    É o objeto de visualização ondem os componentes da aplicação devem ser importados e utilizados.

## LoginView

    Página responsável pelo processo de Login, tanto seu layout, como a validação e login no servidor.

    Não utiliza nenhum componente especial ou lib, apenas notify para messagens no estilo toast e axios para consumir a API de login.

## CrudView

    Mais nova página da aplicação, consiste em criar/atualizar/editar/excluir o conteúdo que está no book.
    Até a versão 1.06, está funcionalidade ainda não está implementada.

    Está página contém funções e validações que englobam todo o escopo do produto, como:
    Tamanhos, cores, imagens (base64/mongo), funções que retorna a img como pre-load no ciclo de vida Vue, entre outros.

    Pontos de atenção desta página são as chamadas de api, o reset dos dados, e a inclusão, via array de Cores/tamanhos/infotext - *** devem ser arrays *** - .
