---
Componentes e Mixins
---

### GetImgMixin

    Componente utilizado como ferramenta para retornar imagens direto do MongoDB, um vez que, todas as imagens sejam portadas para lá como base64.

### Header

    Componente Header contem apenas os estilos de cabeçalho e o router-link para navegação entre páginas;

### Footer

    Componente que contém o rodape com estilos e versão do sistema

### LoginDetails

    Componente que carrega as informações de login, botão de sair e botão para página CRUD.
    Utilizada normalmente na parte superior direita da aplicação, mostrando as informações de login

### ItemCard

    Componente de card utilizado em toda aplicação para mostrar os produtos.
    Contém todo código, links e lógica para mostrar produtos, em cards, independente de sua categoria.
    Também contém a chamada de API que solicita, junto a linx, a disponibilidade do produto, caso um usuario de LOJA esteja logado.

### ChatBot

    Contém o componente de pesquisa/query para a IA, que utiliza o contexto do próprio book para segurar uma resposta assertiva.

### Pesquisa

    Componente utilizado em toda aplicação, para filtrar dados e mostrar de acordo com a pesquisa.
    Cada estilo de filtro é um função/lógica dentro desde componente. Ex: filtro por cor ou combinado.
