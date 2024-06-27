const card = document.querySelector(".cards-box");
const mazos = [
  {
    src: "../img/Purrely.jpeg",
    Nombre: "Tearlaments",
    Tipo: "Control/Aggro",
    Atributo: "Oscuridad",
    Valor: "200 USD",
    descr:
      "mazo centrado en botar cartas del mazo al cementerio para activar poderosos efectos que permitiran acceso al Mazo Extra invocando poderosos Monstruos de Fusión",
  },
  {
    src: "../img/Purrely.jpeg",
    Nombre: "Mementotlan",
    Tipo: "Control",
    Atributo: "Oscuridad",
    Valor: "100 USD",
    descr:
      "mazo centrado en botar cartas del mazo al cementerio para activar poderosos efectos que permitiran acceso al Mazo Extra invocando poderosos Monstruos de Fusión",
  },
  {
    src: "../img/Purrely.jpeg",
    Nombre: "Purrely",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "mazo centrado en botar cartas del mazo al cementerio para activar poderosos efectos que permitiran acceso al Mazo Extra invocando poderosos Monstruos de Fusión",
  },
];
let cardContent = "";
for (const mazo of mazos) {
  cardContent += `
    <div class='mazo'>
      <img src="${mazo.src}" alt="${mazo.Nombre}">
      <h3>Mazo: ${mazo.Nombre}</h3>
      <h4>Valor: ${mazo.Valor}</h4>
      <h4>Tipo: ${mazo.Tipo}</h4>
      <h4>Atributo: ${mazo.Atributo}</h4>
      <p>${mazo.descr}</p>
    </div>
  `;
}
card.innerHTML = cardContent;
