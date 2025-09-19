---
API's
---

### Grande parte das API's são chamadas e/ou processadar no componente store/apiStore.js

::: info
Como está aplicação utiliza Vue 3.x >, por boa prática, chamadas e alguns processamentos de dadossão feitos do arquivos da store (apiStore).
:::

### apiStore => fetchApiData()

Função responsável pela chama da api principal, localizada na store.
Está api, além de carregar dados, filtra dados e capta informações que são utilizadas em outras partes da aplicação.
É a API mais importante da aplicação, qualquer erro aqui provavelmente fará com que a aplicação não funcione corretamente.

# Request

```
{
 (Objeto Vazio)
}
```

# Response

```
 {
        "tipo": "sutias",
        "cluster": "SUTOP",
        "subCategoria": "Sutop®",
        "referencia": "51522",
        "colecao": "Athena",
        "tecido": "NEO BLOCK POWER 4S + ALQUIMIA",
        "tecnologiaEBeneficios": [
            {
                "tecnologia": "Cós e costas em Neo Block Power 4S",
                "beneficio": "Sensação suave, segura e sem marcas nas costas, laterais e bases"
            },
            {
                "tecnologia": "Laterais mais largas e fecho nas costas",
                "beneficio": "Sustenta e esconde as bananinhas laterais"
            },
            {
                "tecnologia": "Novo bojo inteiriço e alças de borracha forradas e reguláveis",
                "beneficio": "Conforto e sustentação"
            }
        ],
        "infoText": [
            "Com Bojo",
            "Sem Aro"
        ],
        "tamanhos": [
            "40B",
            "40C",
            "40D",
            "40DD",
            "42B",
            "42C",
            "42D",
            "42DD",
            "44B",
            "44C",
            "44D",
            "46BC",
            "48B"
        ],
        "cores": [
            "071 - preto",
            "368 - toffee",
            "582 - rosa mônaco"
        ]
    },
```

### apiStore => linkBuilder

    Linkbuilder é a função que capta as refências contidas no mongoDB/JSON, faz uma comparadação entre referencia (book) vs productID (vtex) e a loja que está logada.


    No click o itemCard, esse link montado é acionado, levando o usuário para a página de prateleira infinita.

    LinkBuilder utiliza as refências do fetchApi, monta um link como:

```
   https://liz.myvtex.com/assisted-sales/sales-app/product/${found.productId}
```

    contatena essas urls no backend consumindo o backend, do backend consume a api Vtex, e no retorno são montados os links da prateleira infinita.

### apiStore => callLogin

    callLogin é a API responsável por validar o usuário e senha no servidor backend, mostrar mensagem de sucesso ou erro, e autorizar o login do usuário.

## Request

```
    {
    "nome_loja": "representante",
    "password": "repliz2025"

}

```

## Response

```

{
"message": "",
"token": "",
"dados": {
"\_id": "",
"nome_loja": "",
"cnpj": "",
"password": ""
}
}

```

### Operações C R U D => Somente página crudView

    Última atualização do bookLiz, que consiste em operações de criação, leitura, edição e remoção de itens do mongoDB (itensCollections), que são utilizados como 'base' do WebBook

## create

```

    {
                tipo: "",
                cluster: "",
                subCategoria: "",
                referencia: "",
                colecao: "",
                tecido: "",
                imagemBase64: "",
                lstEdit: null,
                tecnologiaEBeneficios: [

                ],
                infoText: [],
                tamanhos: [],
                cores: []
            }

```

## read

    O ID é precisar ser concatenado na URL para que a API remova o item certo.

```

{
_id:""
tipo: "",
cluster: "",
subCategoria: "",
referencia: "",
colecao: "",
tecido: "",
imagemBase64: "",
lstEdit: null,
tecnologiaEBeneficios: [

                ],
                infoText: [],
                tamanhos: [],
                cores: []
            }

```

## update

```

{
\_id:""
tipo: "",
cluster: "",
subCategoria: "",
referencia: "",
colecao: "",
tecido: "",
imagemBase64: "",
lstEdit: null,
tecnologiaEBeneficios: [

                ],
                infoText: [],
                tamanhos: [],
                cores: []
            }

```

## Delete (/delete/:id)

# Request

O ID é precisar ser concatenado na URL para que a API remova o item certo.

```

{
\_id:""
tipo: "",
cluster: "",
subCategoria: "",
referencia: "",
colecao: "",
tecido: "",
imagemBase64: "",
lstEdit: null,
tecnologiaEBeneficios: [

                ],
                infoText: [],
                tamanhos: [],
                cores: []
            }

```
