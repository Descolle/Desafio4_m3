const card2 = document.querySelector(".cards-box2v");
const arriendos = [
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13714538-e319-4cce-9062-6941ce18525d/df4q9nw-1c9366cc-9ad5-4b04-b757-d8714061c6ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzNzE0NTM4LWUzMTktNGNjZS05MDYyLTY5NDFjZTE4NTI1ZFwvZGY0cTludy0xYzkzNjZjYy05YWQ1LTRiMDQtYjc1Ny1kODcxNDA2MWM2ZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HMhnlOWm1P4h1kaqAJiOaHmJp6khJ7wMBNa46Dwt2D0",
    Nombre: "Magistus",
    Tipo: "Control/Aggro",
    Atributo: "Oscuridad",
    Valor: "200 USD",
    descr:
      "Rituals. Fusions. Synchros. Xyz. It’s so hard to choose a direction for your Deck, but Magikeys open the door to all these possibilities!",
  },
  {
    src: "https://preview.redd.it/wm67a5gsr8k81.jpg?auto=webp&s=03152669ab6ceb697127a274b44a14cf14d7ec66",
    Nombre: "S-Force",
    Tipo: "Control",
    Atributo: "Oscuridad",
    Valor: "100 USD",
    descr:
      "The S-Force monsters utilize the field’s columns to control the game. Any opposing monster that shares a column with an S-Force will have some kind of negative effect applied.",
  },
  {
    src: "https://ih1.redbubble.net/image.1646278449.6602/st,small,507x507-pad,600x600,f8f8f8.jpg",
    Nombre: "Toon",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "¿Quieres sentirte como Maximilian Pegasus? Con este mazo Toon podras hacer todas las jugadas que quieras",
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
    </div>
  `;
}
card2.innerHTML = cardContent2;