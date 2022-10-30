const artistas = [
    {
      nombre: "HARRY STYLES",
      ubicacion: "ESTADIO RIVER PLATE",
      img1: "./assets/images/harry.jpg",
      url: "./events/harry-styles.html",
    },
    {
      nombre: "COLDPLAY",
      ubicacion: "ESTADIO RIVER PLATE",
      img1: "./assets/images/coldplay.png",
      url: "./events/coldplay.html"
    },
    {
      nombre: "IMAGINE DRAGONS",
      ubicacion: "COSTANERA SUR",
      img1: "./assets/images/imaginedragons.png",
      url: "./events/imagine-dragons.html"
    },
    {
      nombre: "DUA LIPA",
      ubicacion: "CAMPO ARGENTINO DE POLO",
      img1: "./assets/images/dualipa.png",
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
  { nombre: "CAMPO DELANTERO", precio: 17500 },
  { nombre: "PLATEA PREFERENCIAL", precio: 16500 },
  { nombre: "PLATEA COMÚN", precio: 13500 },
  { nombre: "PLATEA MEDIA SIVORI", precio: 12000 },
  { nombre: "PLATEA ALTA", precio: 12000 },
  { nombre: "CAMPO", precio: 10000 },
  { nombre: "PLATEA ALTA SIVORI", precio: 7500 },
];

//  COLDPLAY

const fechasColdplay = [
  {dia: "25 de octubre de 2022"},
  {dia: "26 de octubre de 2022"},
  {dia: "28 de octubre de 2022"},
  {dia: "29 de octubre de 2022"},
  {dia: "1 de noviembre de 2022"},
  {dia: "2 de noviembre de 2022"},
  {dia: "4 de noviembre de 2022"},
  {dia: "5 de noviembre de 2022"},
  {dia: "7 de noviembre de 2022"},
  {dia: "8 de noviembre de 2022"},
]

const sectoresColdplay = [
  { nombre: "CAMPO DELANTERO", precio: 23000 },
  { nombre: "PLATEA PREFERENCIAL", precio: 23000 },
  { nombre: "PLATEA COMÚN", precio: 16000 },
  { nombre: "PLATEA MEDIA SIVORI", precio: 15000 },
  { nombre: "PLATEA ALTA", precio: 14000 },
  { nombre: "CAMPO", precio: 12000 },
  { nombre: "PLATEA ALTA SIVORI", precio: 9500 },
];

//  DUA LIPA

const fechasDua = [
  {dia: "13 de septiembre de 2022"},
  {dia: "14 de septiembre de 2022"},
]

const sectoresDua= [
  { nombre: "CAMPO DELANTERO", precio: 14500 },
  { nombre: "CAMPO GENERAL", precio: 9500 },
];

//  IMAGINE DRAGONS

const fechasImagine = [
  {dia: "23 de octubre de 2022"},
]

const sectoresImagine= [
  { nombre: "CAMPO DELANTERO", precio: 16000 },
  { nombre: "CAMPO GENERAL", precio: 9500 },
];

export {artistas, fechasHarry, sectoresHarry, cantidad, fechasColdplay, sectoresColdplay, sectoresDua, fechasDua, sectoresImagine, fechasImagine};