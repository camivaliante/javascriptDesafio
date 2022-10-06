const artistas = [
    {
      nombre: "HARRY STYLES",
      ubicacion: "ESTADIO RIVER PLATE",
      img1: "./images/harry.jpg",
      url: "./events/harry-styles.html",
    },
    {
      nombre: "COLDPLAY",
      ubicacion: "ESTADIO RIVER PLATE",
      img1: "./images/coldplay.png",
      url: "./events/coldplay.html"
    },
    {
      nombre: "IMAGINE DRAGONS",
      ubicacion: "COSTANERA SUR",
      img1: "./images/imaginedragons.png",
      url: "./events/imagine-dragons.html"
    },
    {
      nombre: "DUA LIPA",
      ubicacion: "CAMPO ARGENTINO DE POLO",
      img1: "./images/dualipa.png",
      url: "./events/dua-lipa.html"
    }
  ];

  const cantidad = [
    {cant: 1},
    {cant: 2},
    {cant: 3},
    {cant: 4},
  ];

// HARRY STYLES

const fechasHarry = [
  {dia: "3 de diciembre de 2022"},
  {dia: "4 de diciembre de 2022"}
]

const sectoresHarry = [
  { nombre: "CAMPO VIP", precio: 17500 },
  { nombre: "PLATEA PREFERENCIAL", precio: 16500 },
  { nombre: "PLATEA COMÚN", precio: 13500 },
  { nombre: "PLATEA MEDIA SIVORI", precio: 12000 },
  { nombre: "PLATEA ALTA", precio: 12000 },
  { nombre: "CAMPO", precio: 10000 },
  { nombre: "PLATEA ALTA SIVORI", precio: 7500 },
];

//  COLDPLAY



export {artistas, fechasHarry, sectoresHarry, cantidad};