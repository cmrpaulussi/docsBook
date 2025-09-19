# WebBookDigital

Este projeto foi com base Book_Clusters_Liz_2024, desenvolvido pela equipe interna de Marketing.
O projeto foi desenvolvido em cima de um PDF, que foi transformado em uma aplicação interativa com links para prateleira infinita.

### Arquitetura e TechStack

Este projeto foi desenvolvido com Vue 3.5, Pinia 2.2 e Vite, e seu backend em formato JSON, está rodando em ExpressJS.

## Dependencias e Libraries

Este projeto utiliza, além das tecnologias citadas acima:

```
Babel, Cypress, Prettier, Bootstrap (vanilla), ESLint, axios, vue-router 4, Underscore.
```

E também seu servidor Express, que além de consumir o JSON e montar um api, também serve como middleware para consumir dados do CMS.

## Requisitos e Setup

Primeiramente, este projeto idealmente utiliza NodeJs v18 ou maior.
Caso queria, instale e utilize `nvm windows` para gerenciar as versões do node, https://github.com/coreybutler/nvm-windows

Com o NodeJs na versão correta instalado, rode:

```
npm i
```

## Desenvolvimento

Os principais arquivos dessa aplicação são:

#### apiStore.js - Gerencia chamadas de API e a store em geral;

#### inicioView.vue - Página inicial, também faz as requisições dos itens da api no servidor, no mounted();

#### itemCard.vue - Componente que monta os cards da aplicação, também monta os links para prateleira infinita;

#### Pesquisa.vue - Component que é responsável por todo processo de pesquisa da aplicação.

#### main.js - Importações de configurações geral da aplicação Vue.

## Rodando dev server

```sh
npm run dev
```

## Compilação e minificação de arquivos

Primeiramente, faça uma limpeza de cache no seu gerenciador de pacotes
`npm cache clean --force `

Também tenha certeza que seu servidor Express esteja rodando e ativo:

Após isso, rode:

```sh
npm run build
```
