[![Logo](/public/full-logo.png)](https://mapaespecial.com)

<h1 align="center">Mapa Especial</h1>
<p align="center">
<a align="center" href="https://mapaespecial.com">Visit our website — https://mapaespecial.com</a><br>
<a align="center" href="/README.md">🇧🇷 🇵🇹 🇦🇴 🇬🇼 Fala português? Leia a versão em português do README 🇨🇻 🇲🇿 🇸🇹 🇹🇱</a>
</p>

[Mapa Especial](https://mapaespecial.com) is an open-source directory of specialty coffee establishments in the São Paulo metro area and the Baixada Santista. The project aims to help São Paulo residents discover small businesses in the specialty coffee industry.

The map displays cafés and coffee shops that meet the following criteria:

1. The establishment uses single-origin, ethically sourced specialty coffee beans.
2. The establishment aims to offer a great sensory experience for drinkers of black coffee.
3. The establishment staff received the training necessary to brew specialty coffee in accordance with the roaster's tasting notes.
4. The establishment is independently run and is not part of a large chain.
5. The establishment identifies as a cafeteria or a coffee shop. Restaurants with a coffee menu do not qualify because they may lack quality control, as their primary goal is feeding customers.

The website's source code is available on GitHub under the MIT license. We welcome outside contributions to improve the website and its content.

## Disclaimer

* This is a hobby project. The creator is not affiliated with any of the establishments listed on the website.
* Website data comes from public sources and is not guaranteed to be correct. Feel free to correct any mistakes you encounter.
* An omission (or inclusion) of any business does not constitute a judgement on the quality of its coffee.
* There are good coffee places in bad neighbourhoods. Don't take unnecessary risks in São Paulo.
* Nobody is guaranteed a good cup of coffee. Good baristas have bad days. Pressure and temperature influence coffee equipment. Good roasters have bad batches.

## Table of Contents

* [Architecture and dependencies](#architecture-and-dependencies)
* [Run the website on your local machine](#run-the-website-on-your-local-machine)
* [Contribute](#contribute)
  * [Add or edit website data](#add-or-edit-website-data)
  * [Add or improve website functionality](#add-or-improve-website-functionality)
  * [Report bugs](#report-bugs)

## Architecture and dependencies

* Mapa Especial is a static website built with **Next.js** and **React.js**.
* The website does not use a database. The data is stored in the **GeoJSON** format, which is easy to read and edit.
* The website uses the `leaflet` library to display map data.
* The interactive inputs in the filter component are powered by `headlessui` and `react-select`.
* The `react-hook-form` library manages the filter form.
* The website uses `mdx` files to generate pages without interactive content. MDX allows you to mix Markdown code with JSX code.
* The icons for map markers include the following third-party art from The Noun Project (CC BY 3.0):
    1. [Coffee](https://thenounproject.com/icon/coffee-5340097/) by *ohriandesign*
    2. [Coffee cup](https://thenounproject.com/icon/coffee-cup-3203806/) by *Adrien Coquet*
* The website's UI includes icons from the [Phosphor icon family](https://phosphoricons.com) (MIT license).

## Run the website on your local machine

1. Clone the repository.

2. Install package dependencies with your node package manager of choice:

```shell
pnpm i
```

3. Launch the development server:

```shell
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Contribute

### Add or edit website data

Outside contributors can create pull requests to amend website data or remove incorrect website data. Fork the repository from your GitHub account, edit the files, and open a pull request.

* The `src/data/cafes.json` file stores café data.
* The `src/data/shops.json` file stores shop data.
* The `src/data/roasters.json` file stores roaster data.

The `roasters.json` file stores the list of roasters. Roaster objects reference the IDs of cafes and shops that use the roaster's coffee:

```js
    {
        "name": "roasterName",
        "roasterID": 1, /*  has to be unique */
        "ownShops": [1], /*  IDs of shops that are owned by the roaster. Find shop IDs in the "shops.json" file */
        "ownCafes": [1], /*  IDs of cafes that are owned by the roaster. Find cafe IDs in the "cafes.json" file */
        "clientShops": [2], /*  IDs of third-party shops that sell the roaster's beans */
        "clientCafes": [2] /*  IDs of third-party cafes that use the roaster's beans */
    }
```

Café data and shop data follow the same standardised GeoJSON data format:

```js
{
    "type": "Feature", /*  Leave unchanged */
    "id": "52", /*  Make sure the entry has a unique ID. */
    "properties": {
        "name": "cafeName", /*  name of the establishment */
        "instagramHandle": "coffee-shop-sp", /*  Instagram handle (without the URL). Leave empty if the establishment does not have an Instagram account. */
        "websiteURL": "https://website.url", /*  Full website URL. Leave empty if the establishment does not have a website. */
        "googleMapsEmbedURL": "https://www.google.com/maps/embed?pb=!longstringoFnumbersAndDigits", /*  The embed URL for the Google Maps iFrame. Leave empty if the establishment is not present on Google Maps. */
        "roasters": [1,2], /*  Array of roaster IDs. View the "roasters.json" file to view the list of roasters. Leave empty if you don't know which roaster they use. */
        "espressoPrice": "0", /*  The price of a single espresso shot. Set to 0 if the shop does not serve espresso. */
        "veganMilk": false, /*  'true' if the shop offers non-dairy milk */
        "petFriendly": false, /*  'true' if the shop allows pets to enter the establishment */
        "hostsEvents": false, /*  'true' if the shop hosts coffee-related events, such as cuppings */
        "foreignCoffee": false, /*  'true' if the shop serves or sells specialty coffees grown or roasted outside Brazil */
        "brewingMethods": {
            "espresso": false, /*  'true' if the shop serves espresso and espresso-based drinks */
            "batchBrew": false, /*  'true' if the shop brews filter coffee in large batches */
            "hario": false, /*  'true' if the shop brews drinks with Hario V60 and similar drippers (Kalita, Origami, etc.) */
            "chemex": false, /*  'true' if the shop brews drinks with Chemex */
            "aeropress": false, /* 'true' if the shop brews drinks with Aeropress */
            "frenchPress": false, /* 'true' if the shop brews drinks with French Press */
            "oriental": false, /* 'true' if the shop brews oriental coffee with a cezve/ibrik */
            "moka": false /* 'true' if the shop brews drinks with a moka / cafeteria italiano */
        },
        "food": {
            "desserts": false, /*  'true' if the shop sells desserts (cakes, sweets, etc.) */
            "breakfast": false, /*  'true' if the shop serves breakfast */
            "snacks": false, /*  'true' if the shop serves snacks (hot dogs, burgers, etc.) */
            "mainDishes": false, /*  'true' if the shop serves lunch or dinner */
            "vegFood": false /*  'true' if the shop offers vegeterian/vegan food options */
        },
        "shop": {
            "coffeeBeans": false, /*  'true' if the shop sells coffee beans */
            "equipment": false, /*  'true' if the shop sells coffee equipment (brewing cones, grinders, coffee filters) */
            "merch": false /*  'true' if the shop sells coffee-related merch (T-shirts, hoodies, stickers) */
        }
    },
    "geometry": {
        "coordinates": [-23.564125694125188,-46.683245319806595], /*  populate with the geographical coordinates of the place */
        "type": "Point" /*  Leave unchanged */
    }
}
```

### Add or improve website functionality

You're welcome to submit pull requests with website improvements. Maintainers have the authority to decline third-party PRs, so please OK your idea with the owner of the repository before you put in any work. Make sure your pull request does not break existing functionality or negatively impact the website's look.

### Report bugs

Create a new [GitHub issue](https://github.com/titerman/mapa-especial/issues/new) if you notice a bug or have an improvment idea.
