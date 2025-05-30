import{_ as a,c as o,ae as i,o as n}from"./chunks/framework.C3n_qlVp.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"0":"P","1":"á","2":"g","3":"i","4":"n","5":"a","6":"s"},"headers":[],"relativePath":"paginas.md","filePath":"paginas.md"}'),s={name:"paginas.md"};function t(r,e,d,c,l,p){return n(),o("div",null,e[0]||(e[0]=[i(`<h2 id="inicioview" tabindex="-1">InicioView <a class="header-anchor" href="#inicioview" aria-label="Permalink to &quot;InicioView&quot;">​</a></h2><pre><code>Páginas de de visualização incial de aplicação, contém dados do menu e seu controle, load incial do dados da API principal, como itens, cores, tamanhos entre outros.

Aqui também é improtado os componentes principais componentes da aplicação, como: Pesquisa, ItemCard, ChatBotIa.

É o objeto de visualização ondem os componentes da aplicação devem ser importados e utilizados.
</code></pre><h2 id="loginview" tabindex="-1">LoginView <a class="header-anchor" href="#loginview" aria-label="Permalink to &quot;LoginView&quot;">​</a></h2><pre><code>Página responsável pelo processo de Login, tanto seu layout, como a validação e login no servidor.

Não utiliza nenhum componente especial ou lib, apenas notify para messagens no estilo toast e axios para consumir a API de login.
</code></pre><h2 id="crudview" tabindex="-1">CrudView <a class="header-anchor" href="#crudview" aria-label="Permalink to &quot;CrudView&quot;">​</a></h2><pre><code>Mais nova página da aplicação, consiste em criar/atualizar/editar/excluir o conteúdo que está no book.
Até a versão 1.06, está funcionalidade ainda não está implementada.

Está página contém funções e validações que englobam todo o escopo do produto, como:
Tamanhos, cores, imagens (base64/mongo), funções que retorna a img como pre-load no ciclo de vida Vue, entre outros.

Pontos de atenção desta página são as chamadas de api, o reset dos dados, e a inclusão, via array de Cores/tamanhos/infotext - *** devem ser arrays *** - .
</code></pre>`,6)]))}const g=a(s,[["render",t]]);export{u as __pageData,g as default};
