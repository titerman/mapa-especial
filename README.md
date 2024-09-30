[![Logo](/public/full-logo.png)](https://mapaespecial.com)
 
<h1 align="center">Mapa Especial</h1>
<p align="center">
<a align="center" href="https://mapaespecial.com">Visite o site — https://mapaespecial.com</a><br>
<a align="center" href="/README_EN.md">🦅 Don't speak Portuguese? Read the English version of the README 🦅</a>
</p>

[Mapa Especial](https://mapaespecial.com) é uma diretoria open-source de estabelecimentos que trabalham com cafés especiais em Grande São Paulo e Baixada Santista. O projeto tem como objetivo ajudar os moradores de São Paulo a descobrir pequenos negócios no setor de cafés especiais.

O mapa exibe cafeterias e lojas que atendem aos seguintes critérios:

1. O local utiliza cafés especiais de origem única e ética.
2. O local tem como objetivo oferecer uma ótima experiência sensorial para os apreciadores de café preto.
3. Os funcionarios de local recebeu o treinamento necessário para preparar café especial de acordo com as notas sensoriais do torrador.
4. O local é um negócio independente e não faz parte de uma grande rede.
5. O estabelecimento se identifica como uma cafeteria ou uma loja que vende café. Restaurantes que vendem café não se qualificam porque podem não ter controle de qualidade suficiente, já que seu objetivo principal é alimentar os clientes.

O código-fonte do site está disponível no GitHub sob a licença MIT. Agradecemos contribuições externas para melhorar o site e seu conteúdo.

## Isenção de responsabilidade

* Este site é um projeto de hobby. O criador não é afiliado a nenhum dos negócios que ele descreve.
* Os dados do site vêm de fontes públicas. Não há garantia de que estejam corretos. Sinta-se à vontade para corrigir quaisquer erros que encontrar.
* A omissão (ou inclusão) de qualquer empresa não constitui um julgamento sobre a qualidade do seu café.
* Há bons lugares para tomar café em bairros ruins. Não corra riscos desnecessários em São Paulo.
* Ninguém tem garantia de uma boa xícara de café. Bons baristas têm dias ruins. Pressão e temperatura influenciam o equipamento de café. Bons torradores têm lotes ruins.

## Índice

* [Arquitetura e dependências](#arquitetura-e-dependências)
* [Execute o site na sua computador local](#execute-o-site-na-sua-computador-local)
* [Como contribuir](#como-contribuir)
  * [Adicione ou edite dados do site](#adicione-ou-edite-dados-do-site)
  * [Adicione ou melhore a funcionalidade do site](#adicione-ou-melhore-a-funcionalidade-do-site)
  * [Relatórios de bugs](#relatórios-de-bugs)

## Arquitetura e dependências

* Mapa Especial é um site estático criado com **Next.js** e **React.js**.
* O site não usa um software de banco de dados. Os dados são armazenados no formato **GeoJSON**, que é fácil de ler e editar.
* O site usa a biblioteca `leaflet` para exibir dados do mapa.
* As entradas interativas no componente de filtro são alimentadas por `headlessui` e `react-select`.
* A biblioteca `react-hook-form` gerencia o formulário de filtro.
* O site usa o formato `mdx` para gerar páginas sem conteúdo interativo. O MDX permite que você misture código Markdown com código JSX.
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

Contribuidores externos podem criar pull requests para adicionar novos dados ou remover dados incorretos. Crie um fork de esse repositório na sua conta do GitHub, edite os arquivos e abra um pull request.

* O arquivo `src/data/cafes.json` armazena dados das cafeterias.
* O arquivo `src/data/shops.json` armazena dados das lojas.
* O arquivo `src/data/roasters.json` armazena dados dos torradores.

O arquivo `roasters.json` armazena a lista de torradores. Objetos `Roaster` referenciam os IDs de cafés e lojas que usam o café daquele torrador:

```js
    {
        "name": "roasterName", /* O nome do torrador */
        "roasterID": 1, /* ID único */
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
        "instagramHandle": "coffee-shop-sp", /* Nome de usuário do Instagram (sem o restante da URL). Manter vazio se o estabelecimento não tiver uma conta no Instagram. */
        "websiteURL": "https://website.url", /* A URL completa do site do negócio. Manter vazio se o estabelecimento não tiver um site. */
        "googleMapsEmbedURL": "https://www.google.com/maps/embed?pb=!longstringoFnumbersAndDigits", /* A URL de incorporação para o iFrame do Google Maps. Manter vazio se o negócio não estiver no Google Maps. */
        "roasters": [1,2], /* Array de IDs de torradores cujos produtos o local tem. Veja o arquivo "roasters.json" para ver a lista de torradores e seus IDs. Manter vazio se não souber qual torrador o negócio usam. */
        "espressoPrice": "0", /* O preço de um único shot de espresso. Insira 0 se a loja não servir espresso. */
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
            "breakfast": false, /* 'true' se o negócio serve café da manhã. */
            "snacks": false, /* 'true' se o negócio serve lanches (cachorros-quentes, hambúrgueres, etc.). */
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

Você é bem-vindo para enviar PRs com melhorias para o site. Os mantenedores têm autoridade para recusar PRs de usuários, então aprove sua ideia com o proprietário do repositório antes de colocar qualquer trabalho. Certifique-se de que seu PR não quebre a funcionalidade existente ou tenha impacto negativo na aparência do site.

### Relatórios de bugs

Crie um novo [ticket do GitHub](https://github.com/titerman/mapa-especial/issues/new) se notar um bug ou tiver uma ideia de melhoria.
