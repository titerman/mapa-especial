# &nbsp;

[![Logo](/public/full-logo.png)](https://mapaespecial.com)

<h1 align="center">Mapa Especial</h1>
<p align="center">
<a align="center" href="https://mapaespecial.com">Visite o site — https://mapaespecial.com</a><br>
<a align="center" href="/README_EN.md">🦅 Don't speak Portuguese? Read the English version of the README 🦅</a>
</p>

[Mapa Especial](https://mapaespecial.com) é uma diretoria open-source de empresas que trabalham com cafés especiais em Grande São Paulo e Baixada Santista. O projeto foi criado para ajudar as pessoas descobrir pequenos negócios no setor de café especial.

Você pode ler a história da criação do site no [blog da fundadora](https://titerman.com/articles/building-mapa-especial).

## Critérios de Seleção

O site inclui cafeterias, lojas e torrefações que atendem aos seguintes critérios:

1. O local utiliza cafés especiais de origem única e ética.
2. O local tenta oferecer uma ótima experiência sensorial para os amadores de café preto.
3. Os funcionarios recebeu o treinamento necessário para preparar ou torrar café especial.
4. O local é um negócio independente e não faz parte de uma grande rede.
5. O foco principal do local é café. Restaurantes com café no cardapio não se qualificam porque seu foco principal é comida.

O código-fonte do site está disponível sob a licença MIT. Agradecemos contribuições externas para melhorar o site e seu conteúdo.

## Isenção de responsabilidade

* Mapa Especial é um projeto de hobby. Os criadores não têm um incentivo financeiro para manter o site, nem afiliação com nenhum dos negócios apresentados.
* Os dados do site vêm de fontes públicas. Não há garantia de que estejam corretos. Sinta-se à vontade para [corrigir](/como-contribuir) quaisquer erros você encontra.
* A omissão (ou inclusão) de qualquer empresa não constitui um julgamento sobre a qualidade do seus produtos.
* Há bons lugares para tomar café em bairros ruins. Não corra riscos desnecessários em São Paulo.
* Ninguém tem a garantia de uma boa xícara de café. Bons torradores têm lotes ruins. Bons baristas fiquem cansadas. Pressão atmosférica e os condições climaticas influenciam máquinas de café.

## Índice

* [Arquitetura e dependências](#arquitetura-e-dependências)
* [Execute o site na sua computador local](#execute-o-site-na-sua-computador-local)
* [Como contribuir](#como-contribuir)
  * [Adicione ou edite dados do site](#adicione-ou-edite-dados-do-site)
  * [Adicione ou melhore a funcionalidade do site](#adicione-ou-melhore-a-funcionalidade-do-site)
  * [Relatórios de bugs](#relatórios-de-bugs)

## Arquitetura e dependências

* Mapa Especial é um site estático criado com **Next.js** e **React.js**.
* Os dados do site são armazenados no formato **GeoJSON**, sem o uso de um banco de dados.
* O site usa o `leaflet` para exibir os dados do mapa.
* As entradas interativas no componente de filtro são alimentadas por `headlessui` e `react-select`.
* O `react-hook-form` gerencia o formulário de filtro.
* O site usa o `fullcalendar` para exibir a agenda.
* O formato `mdx` páginas sem conteúdo interativo. O MDX permite que você misture código Markdown com código JSX.
* Os ícones para os marcadores de mapa incluem a seguinte arte do The Noun Project (CC BY 3.0):
    1. [Coffee](https://thenounproject.com/icon/coffee-5340097/) de *ohriandesign*
    2. [Coffee cup](https://thenounproject.com/icon/coffee-cup-3203806/) de *Adrien Coquet*
* A interface do site inclui ícones de [Phosphor icon family](https://phosphoricons.com) (licença MIT).

## Execute o site na sua computador local

1. Clonar o repositório.

2. Instale as dependências do pacote com o gerenciador de pacotes Node.js de sua escolha:

    ```shell
    pnpm i
    ```

3. Inicie o servidor de desenvolvimento:

    ```shell
    pnpm run dev
    ```

4. Abra [http://localhost:3000](http://localhost:3000) para visualizar o site.

## Como contribuir

### Adicione ou edite dados do site

Contribuidores externos podem criar pull requests para adicionar novos dados ou remover dados incorretos. Crie um fork desse repositório na sua conta do GitHub, edite os arquivos e abra um pull request.

* O arquivo `src/data/cafes.json` armazena dados das cafeterias.
* O arquivo `src/data/shops.json` armazena dados das lojas.
* O arquivo `src/data/roasters.json` armazena dados dos torradores.
* O arquivo `src/data/events.json` armazena dados dos eventos.

O arquivo `roasters.json` armazena a lista de torradores.

```js
    {
        "name": "roasterName", /* O nome do torrador */
        "roasterID": 1, /* ID único */
        "city": "São Paulo", /* Cidade */
        "state": "SP", /* estado (UF) */
        "instagramHandle": "umcoffeeco", /* Nome da conta no Instagram (somente o username). Manter vazio se o negócio não tem a conta. */
        "websiteURL": "https://umcoffeeco.com.br",  /* A URL completa do site. Manter vazio se o negócio não tem um site. */
        "deliversNationwide": true,  /* 'true' se o negócio entrega pedidos em todo o Brasil */
        "foreignCoffee": false,  /* 'true' se o negócio vende cafés especiais cultivados fora do Brasil.  */
        "onlineShopping": true,  /* 'true' se o negócio tem um loja online.  */
        "ownShops": [1], /* IDs de lojas que são de propriedade do torrador. Encontre IDs de lojas no arquivo "shops.json" */
        "ownCafes": [1], /* IDs de cafeterias que são de propriedade do torrador. Encontre IDs de cafeterias no arquivo "cafes.json" */
        "clientShops": [2], /* IDs de lojas não afiliadas que vendam os cafés do torrador */
        "clientCafes": [2] /* IDs de cafeterias não afiliadas que usam os cafés do torrador */
    }
```

Dados de cafeterias e lojas seguem o mesmo formato de dados GeoJSON normalizado:

```js
{
    "type": "Feature", /* Manter inalterado. */
    "id": "58", /* Certifique-se de que a entrada tenha um ID exclusivo. */
    "properties": {
        "name": "Coffee Shop Name", /* Nome do negócio. */ 
        "instagramHandle": "coffee-shop-sp", /* Nome da conta no Instagram (somente o username). Manter vazio se o negócio não tem a conta. */
        "websiteURL": "https://website.url", /* A URL completa do site. Manter vazio se o negócio não tem um site. */
        "googleMapsEmbedURL": "https://www.google.com/maps/embed?pb=!longStringOfNumbersAndDigits", /* O iFrame embed URL do Google Maps. Manter vazio se o negócio não estiver no Google Maps. */
        "roasters": [1,2], /* Array de IDs de torradores apresentados no local. Retire as IDs de torradores do arquivo "roasters.json". Manter vazio se não souber qual torrador o negócio usam. */
        "espressoPrice": "0", /* O preço de um único shot de espresso padrão. Insira 0 se a loja não servir espresso. */
        "veganMilk": false, /* 'true' se o negócio oferece leites vegetais. */
        "petFriendly": false, /* 'true' se o negócio permite a entrada de animais. */
        "hostsEvents": false, /* 'true' se o negócio organizo eventos relacionados ao café, como degustações. */
        "foreignCoffee": false, /* 'true' se o negócio serve ou vende cafés especiais cultivados ou torrados fora do Brasil. */
        "brewingMethods": {
            "espresso": false, /* 'true' se o negócio serve café espresso e bebidas à base de café espresso. */
            "batchBrew": false, /* 'true' se o negócio usa cafeteiras automáticas para preparar café filtrado em grandes quantidades. */
            "hario": false, /* 'true' se o negócio prepara café coado com Hario V60 e coadores similares (Kalita, Origami, etc.). */
            "chemex": false, /* 'true' se o negócio prepara café coado com Chemex. */
            "aeropress": false, /* 'true' se o negócio prepara café com Aeropress. */
            "frenchPress": false, /* 'true' se o negócio prepara café com prensa francesa. */
            "oriental": false, /* 'true' se o negócio prepara café oriental com cezve / ibrik. */
            "moka": false /* 'true' se o negócio prepara café com moka / cafeteira italiana. */
        },
        "food": {
            "desserts": false, /* 'true' se o negócio vende sobremesas (bolos, doces, etc.). */
            "breakfast": false, /* 'true' se o negócio serve café da manhã (pequeno-almoço). */
            "snacks": false, /* 'true' se o negócio serve lanches (cachorros quentes, hambúrgueres, etc.). */
            "mainDishes": false, /* 'true' se o negócio serve pratos principais no almoço ou jantar. */
            "vegFood": false /* 'true' se o negócio oferece opções de comida vegetariana/vegana. */
        },
        "shop": {
            "coffeeBeans": false, /* 'true' se o negócio vende café em grãos. */
            "equipment": false, /* 'true' se o negócio vende equipamento do café (coadores, moedores, filtros de café). */
            "merch": false /* 'true' se o negócio vende produtos relacionados ao café (camisetas, moletons, adesivos). */
        }
    },
    "geometry": {
        "coordinates": [-23.564125694125188,-46.683245319806595], /* Insira as coordenadas geográficas do negócio. */
        "type": "Point" /* Manter inalterado. */
    }
}
```

### Adicione ou melhore a funcionalidade do site

Você é bem-vindo para enviar PRs com melhorias para o site. Os mantenedores têm autoridade para recusar PRs de usuários, então aprove sua ideia com o dono do repositório antes de fazer qualquer trabalho. Certifique-se de que seu PR não quebre a funcionalidade existente ou tenha um impacto negativo na aparência do site.

### Relatórios de bugs

Crie um novo [ticket do GitHub](https://github.com/titerman/mapa-especial/issues/new) se notar um bug ou tiver uma ideia de melhoria.
