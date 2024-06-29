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
  {
    src: "https://ygorganization.com/wp-content/uploads/2022/12/Tevqc2tZ-unnamed-file.webp",
    Nombre: "Amazement",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "This Deck is focused on Amazement Administrator Arlekino, along with the many Attractions at his show! The Attractions are Trap Cards that equip to monsters and apply different effects based on who controls that monster",
      disponible: true
  },
  {
    src: "https://preview.redd.it/so-recently-ive-started-building-a-armed-dragon-deck-but-i-v0-fyx7xvfcqzpa1.jpg?width=640&crop=smart&auto=webp&s=b1458696bf12af83b53a702011e144f96be837fb",
    Nombre: "Armed Thunder Dragon",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "Much like the original Armed Dragons, this Deck wants to level up your Armed Dragon Thunders for increasingly powerful effects. Armed Dragon Thunder LV10 and Armed Dragon LV10 White are your big finishers",
      disponible: false
  },
  {
    src: "https://ms.yugipedia.com//1/13/DualAvatarInvitation-MADU-EN-VG-artwork.pngg",
    Nombre: "Dual Avatar",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "This archetype has only two different monsters in the Main Deck! Dual Avatar Feet – Kokoku and Dual Avatar Fists – Yuhi are your two monsters, each of which you’ll use to Fusion Materials for four different Dual Avatar Fusion Monsters",
      disponible: true
  },
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13714538-e319-4cce-9062-6941ce18525d/dfaxrvr-a157c8ae-29fb-4d7a-99cd-8a77b5c82da3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzNzE0NTM4LWUzMTktNGNjZS05MDYyLTY5NDFjZTE4NTI1ZFwvZGZheHJ2ci1hMTU3YzhhZS0yOWZiLTRkN2EtOTljZC04YTc3YjVjODJkYTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vi199FLwcx_uhs9_IEcrePi5asSMmAVGfPZCnwVOG08",
    Nombre: "Live☆Twin",
    Tipo: "Control",
    Atributo: "Luz",
    Valor: "150 USD",
    descr:
      "¿The Live☆Twin Deck features Live☆Twin Ki-sikil and Live☆Twin Lil-la, live streamers by day who become the phantom thieves Evil★Twins Ki-sikil & Lil-la by night! Each Twin’s cards either help you play the other Twin or are improved when you already have the other",
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
      <p class="${arriendo.disponible ? "text-success" : "text-danger"}">
      <i class="${arriendo.disponible ? "fa-solid fa-check" : "fa-solid fa-x"}"></i> ${arriendo.disponible ? "Disponible" : "No Disponible"}
      </p>
      <button class="bt-3">Arrendar</button>
    </div>
  `;
}
card2.innerHTML = cardContent2;

//fa-solid fa-check para si
//"fa-solid fa-x para no