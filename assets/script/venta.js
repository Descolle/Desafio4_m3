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
  },
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf713fd6-bbfa-4049-9ccf-a366f09ebe02/dgg6aqo-e8a7ba10-1601-460f-8dd2-bb55d0022ecb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmNzEzZmQ2LWJiZmEtNDA0OS05Y2NmLWEzNjZmMDllYmUwMlwvZGdnNmFxby1lOGE3YmExMC0xNjAxLTQ2MGYtOGRkMi1iYjU1ZDAwMjJlY2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NflpTahe8MU7sPXimyae_Gj3xnxyL3aWWfe-lLBnOWk",
    Nombre: "Mementotlan",
    Tipo: "Control",
    Atributo: "Oscuridad",
    Valor: "100 USD",
    descr:
      "mazo centrado en generar recursos para invocar a Mementoal Tecuhtlica - Combined Creation ",
  },
  {
    src: "https://cdn.ygorganization.com/2023/07/purrely.jpg",
    Nombre: "Purrely",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "¿Quién necesita grandes monstruos cuando puedes tener gatitos",
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
      <button class="bt-4">Comprar</button>
    </div>
  `;
}
card.innerHTML = cardContent;