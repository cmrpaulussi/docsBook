import{_ as s,c as n,ae as e,o as p}from"./chunks/framework.CYu0QblF.js";const q=JSON.parse(`{"title":"Request","description":"","frontmatter":{"0":"A","1":"P","2":"I","3":"'","4":"s"},"headers":[],"relativePath":"apis.md","filePath":"apis.md"}`),o={name:"apis.md"};function t(l,a,i,c,u,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h3 id="grande-parte-das-api-s-sao-chamadas-e-ou-processadar-no-componente-store-apistore-js" tabindex="-1">Grande parte das API&#39;s são chamadas e/ou processadar no componente store/apiStore.js <a class="header-anchor" href="#grande-parte-das-api-s-sao-chamadas-e-ou-processadar-no-componente-store-apistore-js" aria-label="Permalink to &quot;Grande parte das API&#39;s são chamadas e/ou processadar no componente store/apiStore.js&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Como está aplicação utiliza Vue 3.x &gt;, por boa prática, chamadas e alguns processamentos de dadossão feitos do arquivos da store (apiStore).</p></div><h3 id="apistore-fetchapidata" tabindex="-1">apiStore =&gt; fetchApiData() <a class="header-anchor" href="#apistore-fetchapidata" aria-label="Permalink to &quot;apiStore =&gt; fetchApiData()&quot;">​</a></h3><p>Função responsável pela chama da api principal, localizada na store. Está api, além de carregar dados, filtra dados e capta informações que são utilizadas em outras partes da aplicação. É a API mais importante da aplicação, qualquer erro aqui provavelmente fará com que a aplicação não funcione corretamente.</p><h1 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span> (Objeto Vazio)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> {</span></span>
<span class="line"><span>        &quot;tipo&quot;: &quot;sutias&quot;,</span></span>
<span class="line"><span>        &quot;cluster&quot;: &quot;SUTOP&quot;,</span></span>
<span class="line"><span>        &quot;subCategoria&quot;: &quot;Sutop®&quot;,</span></span>
<span class="line"><span>        &quot;referencia&quot;: &quot;51522&quot;,</span></span>
<span class="line"><span>        &quot;colecao&quot;: &quot;Athena&quot;,</span></span>
<span class="line"><span>        &quot;tecido&quot;: &quot;NEO BLOCK POWER 4S + ALQUIMIA&quot;,</span></span>
<span class="line"><span>        &quot;tecnologiaEBeneficios&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;tecnologia&quot;: &quot;Cós e costas em Neo Block Power 4S&quot;,</span></span>
<span class="line"><span>                &quot;beneficio&quot;: &quot;Sensação suave, segura e sem marcas nas costas, laterais e bases&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;tecnologia&quot;: &quot;Laterais mais largas e fecho nas costas&quot;,</span></span>
<span class="line"><span>                &quot;beneficio&quot;: &quot;Sustenta e esconde as bananinhas laterais&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;tecnologia&quot;: &quot;Novo bojo inteiriço e alças de borracha forradas e reguláveis&quot;,</span></span>
<span class="line"><span>                &quot;beneficio&quot;: &quot;Conforto e sustentação&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;infoText&quot;: [</span></span>
<span class="line"><span>            &quot;Com Bojo&quot;,</span></span>
<span class="line"><span>            &quot;Sem Aro&quot;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;tamanhos&quot;: [</span></span>
<span class="line"><span>            &quot;40B&quot;,</span></span>
<span class="line"><span>            &quot;40C&quot;,</span></span>
<span class="line"><span>            &quot;40D&quot;,</span></span>
<span class="line"><span>            &quot;40DD&quot;,</span></span>
<span class="line"><span>            &quot;42B&quot;,</span></span>
<span class="line"><span>            &quot;42C&quot;,</span></span>
<span class="line"><span>            &quot;42D&quot;,</span></span>
<span class="line"><span>            &quot;42DD&quot;,</span></span>
<span class="line"><span>            &quot;44B&quot;,</span></span>
<span class="line"><span>            &quot;44C&quot;,</span></span>
<span class="line"><span>            &quot;44D&quot;,</span></span>
<span class="line"><span>            &quot;46BC&quot;,</span></span>
<span class="line"><span>            &quot;48B&quot;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;cores&quot;: [</span></span>
<span class="line"><span>            &quot;071 - preto&quot;,</span></span>
<span class="line"><span>            &quot;368 - toffee&quot;,</span></span>
<span class="line"><span>            &quot;582 - rosa mônaco&quot;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    },</span></span></code></pre></div><h3 id="apistore-linkbuilder" tabindex="-1">apiStore =&gt; linkBuilder <a class="header-anchor" href="#apistore-linkbuilder" aria-label="Permalink to &quot;apiStore =&gt; linkBuilder&quot;">​</a></h3><pre><code>Linkbuilder é a função que capta as refências contidas no mongoDB/JSON, faz uma comparadação entre referencia (book) vs productID (vtex) e a loja que está logada.


No click o itemCard, esse link montado é acionado, levando o usuário para a página de prateleira infinita.

LinkBuilder utiliza as refências do fetchApi, monta um link como:
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   https://liz.myvtex.com/assisted-sales/sales-app/product/\${found.productId}</span></span></code></pre></div><pre><code>contatena essas urls no backend consumindo o backend, do backend consume a api Vtex, e no retorno são montados os links da prateleira infinita.
</code></pre><h3 id="apistore-calllogin" tabindex="-1">apiStore =&gt; callLogin <a class="header-anchor" href="#apistore-calllogin" aria-label="Permalink to &quot;apiStore =&gt; callLogin&quot;">​</a></h3><pre><code>callLogin é a API responsável por validar o usuário e senha no servidor backend, mostrar mensagem de sucesso ou erro, e autorizar o login do usuário.
</code></pre><h2 id="request-1" tabindex="-1">Request <a class="header-anchor" href="#request-1" aria-label="Permalink to &quot;Request&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    {</span></span>
<span class="line"><span>    &quot;nome_loja&quot;: &quot;representante&quot;,</span></span>
<span class="line"><span>    &quot;password&quot;: &quot;repliz2025&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-label="Permalink to &quot;Response&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;message&quot;: &quot;&quot;,</span></span>
<span class="line"><span>&quot;token&quot;: &quot;&quot;,</span></span>
<span class="line"><span>&quot;dados&quot;: {</span></span>
<span class="line"><span>&quot;\\_id&quot;: &quot;&quot;,</span></span>
<span class="line"><span>&quot;nome_loja&quot;: &quot;&quot;,</span></span>
<span class="line"><span>&quot;cnpj&quot;: &quot;&quot;,</span></span>
<span class="line"><span>&quot;password&quot;: &quot;&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="operacoes-c-r-u-d-somente-pagina-crudview" tabindex="-1">Operações C R U D =&gt; Somente página crudView <a class="header-anchor" href="#operacoes-c-r-u-d-somente-pagina-crudview" aria-label="Permalink to &quot;Operações C R U D =&gt; Somente página crudView&quot;">​</a></h3><pre><code>Última atualização do bookLiz, que consiste em operações de criação, leitura, edição e remoção de itens do mongoDB (itensCollections), que são utilizados como &#39;base&#39; do WebBook
</code></pre><h2 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>                tipo: &quot;&quot;,</span></span>
<span class="line"><span>                cluster: &quot;&quot;,</span></span>
<span class="line"><span>                subCategoria: &quot;&quot;,</span></span>
<span class="line"><span>                referencia: &quot;&quot;,</span></span>
<span class="line"><span>                colecao: &quot;&quot;,</span></span>
<span class="line"><span>                tecido: &quot;&quot;,</span></span>
<span class="line"><span>                imagemBase64: &quot;&quot;,</span></span>
<span class="line"><span>                lstEdit: null,</span></span>
<span class="line"><span>                tecnologiaEBeneficios: [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                infoText: [],</span></span>
<span class="line"><span>                tamanhos: [],</span></span>
<span class="line"><span>                cores: []</span></span>
<span class="line"><span>            }</span></span></code></pre></div><h2 id="read" tabindex="-1">read <a class="header-anchor" href="#read" aria-label="Permalink to &quot;read&quot;">​</a></h2><pre><code>O ID é precisar ser concatenado na URL para que a API remova o item certo.
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>_id:&quot;&quot;</span></span>
<span class="line"><span>tipo: &quot;&quot;,</span></span>
<span class="line"><span>cluster: &quot;&quot;,</span></span>
<span class="line"><span>subCategoria: &quot;&quot;,</span></span>
<span class="line"><span>referencia: &quot;&quot;,</span></span>
<span class="line"><span>colecao: &quot;&quot;,</span></span>
<span class="line"><span>tecido: &quot;&quot;,</span></span>
<span class="line"><span>imagemBase64: &quot;&quot;,</span></span>
<span class="line"><span>lstEdit: null,</span></span>
<span class="line"><span>tecnologiaEBeneficios: [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                infoText: [],</span></span>
<span class="line"><span>                tamanhos: [],</span></span>
<span class="line"><span>                cores: []</span></span>
<span class="line"><span>            }</span></span></code></pre></div><h2 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>\\_id:&quot;&quot;</span></span>
<span class="line"><span>tipo: &quot;&quot;,</span></span>
<span class="line"><span>cluster: &quot;&quot;,</span></span>
<span class="line"><span>subCategoria: &quot;&quot;,</span></span>
<span class="line"><span>referencia: &quot;&quot;,</span></span>
<span class="line"><span>colecao: &quot;&quot;,</span></span>
<span class="line"><span>tecido: &quot;&quot;,</span></span>
<span class="line"><span>imagemBase64: &quot;&quot;,</span></span>
<span class="line"><span>lstEdit: null,</span></span>
<span class="line"><span>tecnologiaEBeneficios: [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                infoText: [],</span></span>
<span class="line"><span>                tamanhos: [],</span></span>
<span class="line"><span>                cores: []</span></span>
<span class="line"><span>            }</span></span></code></pre></div><h2 id="delete-delete-id" tabindex="-1">Delete (/delete/:id) <a class="header-anchor" href="#delete-delete-id" aria-label="Permalink to &quot;Delete (/delete/:id)&quot;">​</a></h2><h1 id="request-2" tabindex="-1">Request <a class="header-anchor" href="#request-2" aria-label="Permalink to &quot;Request&quot;">​</a></h1><p>O ID é precisar ser concatenado na URL para que a API remova o item certo.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>\\_id:&quot;&quot;</span></span>
<span class="line"><span>tipo: &quot;&quot;,</span></span>
<span class="line"><span>cluster: &quot;&quot;,</span></span>
<span class="line"><span>subCategoria: &quot;&quot;,</span></span>
<span class="line"><span>referencia: &quot;&quot;,</span></span>
<span class="line"><span>colecao: &quot;&quot;,</span></span>
<span class="line"><span>tecido: &quot;&quot;,</span></span>
<span class="line"><span>imagemBase64: &quot;&quot;,</span></span>
<span class="line"><span>lstEdit: null,</span></span>
<span class="line"><span>tecnologiaEBeneficios: [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                infoText: [],</span></span>
<span class="line"><span>                tamanhos: [],</span></span>
<span class="line"><span>                cores: []</span></span>
<span class="line"><span>            }</span></span></code></pre></div>`,31)]))}const h=s(o,[["render",t]]);export{q as __pageData,h as default};
