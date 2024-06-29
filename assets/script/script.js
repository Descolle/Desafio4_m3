const card = document.querySelector(".cards-box");
const mazos = [
  {
    src: "https://assetsio.gnwcdn.com/yu-gi-oh-tcg-tearlaments-kitkallos-art-crop.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    Nombre: "Tearlaments",
    Tipo: "Control/Aggro",
    Atributo: "Oscuridad",
    Valor: "200 USD",
    descr:
      "mazo centrado en botar cartas del mazo al cementerio para activar poderosos efectos que permitiran acceso al Mazo Extra invocando poderosos Monstruos de Fusión",
    disponible: true,
  },
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf713fd6-bbfa-4049-9ccf-a366f09ebe02/dgg6aqo-e8a7ba10-1601-460f-8dd2-bb55d0022ecb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmNzEzZmQ2LWJiZmEtNDA0OS05Y2NmLWEzNjZmMDllYmUwMlwvZGdnNmFxby1lOGE3YmExMC0xNjAxLTQ2MGYtOGRkMi1iYjU1ZDAwMjJlY2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NflpTahe8MU7sPXimyae_Gj3xnxyL3aWWfe-lLBnOWk",
    Nombre: "Mementotlan",
    Tipo: "Control",
    Atributo: "Oscuridad",
    Valor: "100 USD",
    descr:
      "mazo centrado en generar recursos para invocar a Mementoal Tecuhtlica - Combined Creation ",
    disponible: false,
  },
  {
    src: "https://cdn.ygorganization.com/2023/07/purrely.jpg",
    Nombre: "Purrely",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr: "¿Quién necesita grandes monstruos cuando puedes tener gatitos",
    disponible: true,
  },
];
let cardContent = "";
for (const mazo of mazos) {
  cardContent += `
    <div class='mazo'>
      <img src="${mazo.src}" alt="${mazo.Nombre}">
      <h5>Mazo: ${mazo.Nombre}</h5>
      <h5>Valor: ${mazo.Valor}</h5>
      <p>Tipo: ${mazo.Tipo}<p>
      <p>${mazo.descr}</p>
      <p class="${mazo.disponible ? "text-success" : "text-danger"}>
      <i class="${mazo.disponible ? "fa-solid fa-check" : "fa-solid fa-x"}></i> ${mazo.disponible ? "Disponible" : "No Disponible"}
      </p>
      <button class="bt-4">Comprar</button>
    </div>
  `;
}
card.innerHTML = cardContent;

const card2 = document.querySelector(".cards-box2");
const arriendos = [
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13714538-e319-4cce-9062-6941ce18525d/df4q9nw-1c9366cc-9ad5-4b04-b757-d8714061c6ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzNzE0NTM4LWUzMTktNGNjZS05MDYyLTY5NDFjZTE4NTI1ZFwvZGY0cTludy0xYzkzNjZjYy05YWQ1LTRiMDQtYjc1Ny1kODcxNDA2MWM2ZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HMhnlOWm1P4h1kaqAJiOaHmJp6khJ7wMBNa46Dwt2D0",
    Nombre: "Magistus",
    Tipo: "Control/Aggro",
    Atributo: "Oscuridad",
    Valor: "200 USD",
    descr:
      "Rituals. Fusions. Synchros. Xyz. It’s so hard to choose a direction for your Deck, but Magikeys open the door to all these possibilities!",
      disponible: true
  },
  {
    src: "https://preview.redd.it/wm67a5gsr8k81.jpg?auto=webp&s=03152669ab6ceb697127a274b44a14cf14d7ec66",
    Nombre: "S-Force",
    Tipo: "Control",
    Atributo: "Oscuridad",
    Valor: "100 USD",
    descr:
      "The S-Force monsters utilize the field’s columns to control the game. Any opposing monster that shares a column with an S-Force will have some kind of negative effect applied.",
      disponible: true
  },
  {
    src: "https://ih1.redbubble.net/image.1646278449.6602/st,small,507x507-pad,600x600,f8f8f8.jpg",
    Nombre: "Toon",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "¿Quieres sentirte como Maximilian Pegasus? Con este mazo Toon podras hacer todas las jugadas que quieras",
      disponible: false
  },
];
let cardContent2 = "";
for (const arriendo of arriendos) {
  cardContent2 += `
    <div class='mazo'>
      <img src="${arriendo.src}" alt="${arriendo.Nombre}">
      <h5>Mazo: ${arriendo.Nombre}</h5>
      <h5>Valor: ${arriendo.Valor}</h5>
      <p>Tipo: ${arriendo.Tipo}<p>
      <p>${arriendo.descr}</p>
      <p class="${arriendo.disponible ? "text-success" : "text-danger"}>
      <i class="${arriendo.disponible ? "fa-solid fa-check" : "fa-solid fa-x"}></i> ${arriendo.disponible ? "Disponible" : "No Disponible"}
      </p>
      <button class="bt-3">Arrendar</button>
    </div>
  `;
}
card2.innerHTML = cardContent2;

//fa-solid fa-check para si
//"fa-solid fa-x para no