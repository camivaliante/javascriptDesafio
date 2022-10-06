import {artistas} from "./artistas.js";

const entradas = document.getElementById("tickets-container");

artistas.forEach((artista) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="col-md-6 col-0-gutter">
					<div class="ot-portfolio-item">
						<figure class="effect-bubba">
							<img src="${artista.img1}" class="img-responsive">
							<figcaption>
								<h2>${artista.nombre}</h2>
								<p>${artista.ubicacion}</p>
								<a href="./${artista.url}"></a>
							</figcaption>
						</figure>
					</div>
			</div>
`;
  entradas.appendChild(div);

});


let inconveniente = [];

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

   e.preventDefault();

   const nombre = document.getElementById('nombre').value;
   const email = document.getElementById('email').value;
   const mensaje = document.getElementById('mensaje').value;

   inconveniente.push({nombre, email, mensaje});

  //  alert('¡Muchas gracias ' + nombre + ', tu mensaje ha sido enviado! Nos comunicaremos en un plazo de 72hs');

   Swal.fire(
    'Muchas gracias ' + nombre + ', tu mensaje ha sido enviado!',
    'Nos comunicaremos con vos por E-mail en un plazo de 72hs',
    'success'
  )

   form.reset();

   const enJSON = JSON.stringify(inconveniente);

   localStorage.setItem('inconveniente', enJSON);

   const miInconveniente = JSON.parse(localStorage.getItem('inconveniente'));

})











// let totalCompra = [];

// let todosLosSectores = sectores.map((sector) => sector.nombre + " " + "$" + sector.precio);
// alert("Sectores disponibles: " + todosLosSectores.join(" / "));

// let sector = prompt("Qué sector desea comprar?").toUpperCase();
// let precio = 0;

// if (
//   sector == "CAMPO DELANTERO" ||
//   sector == "PLATEA BAJA" ||
//   sector == "CAMPO" ||
//   sector == "PLATEA ALTA") {

//   switch (sector) {
//     case "CAMPO DELANTERO":
//       precio = 25000;
//       break;

//     case "PLATEA BAJA":
//       precio = 18000;
//       break;

//     case "CAMPO":
//       precio = 12000;
//       break;

//     case "PLATEA ALTA":
//       precio = 8000;
//       break;

//     default:
//       break;
//   }

//   let cantidad = parseInt(prompt("Cuántas entradas desea comprar?","permitido: hasta 4 entradas por compra"));
//   let stock = 4;

//   if (stock >= cantidad) {
//     alert("¡Felicidades " + nombreIngresado + " seleccionaste " + cantidad + " entradas en " + sector + " y hay stock!");
//     let precioTotal = cantidad * precio;
//     let finalizarCompra = confirm("El total de su pedido es $" + precioTotal + " ¿Desea continuar para elegir el método de pago?");

//     if (finalizarCompra) {
//       let todosLosMediosDePago = metodosPago.map((medioPago) => medioPago.nombre + " ");
//       alert("Medios de pago disponibles: " + todosLosMediosDePago.join(" - "));

//       let medioPago = prompt("¿Con qué desea abonar?").toUpperCase();

//       if (
//         medioPago == "TARJETA DE CREDITO" ||
//         medioPago == "TARJETA DE DEBITO" ||
//         medioPago == "TRANSFERENCIA"
//       ) {

//         switch (medioPago) {
//           case "TARJETA DE CREDITO":
//             break;

//           case "TARJETA DE DEBITO":
//             break;

//           case "TRANSFERENCIA":
//             break;

//           default:
//             break;
//         }

//         alert("¡Muchas gracias por su compra!");
//         totalCompra.push({nombreIngresado, sector, cantidad, precio, medioPago});
//         totalCompra.forEach((totalFinal) => {
//           console.log(`NOMBRE: ${nombreIngresado}, SECTOR: ${totalFinal.sector}, CANTIDAD DE ENTRADAS: ${totalFinal.cantidad}, PRECIO POR ENTRADA: $${totalFinal.precio}, MEDIO DE PAGO: ${totalFinal.medioPago}`)});

//         const total = totalCompra.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
//         let stockDisponible = stock - cantidad;
//         console.log(`TOTAL A PAGAR: $${total} || STOCK DISPONIBLE POR USUARIO: ${stockDisponible} || MÚSICO: ${artista}`);

//       } else {
//         alert("No seleccionó ningún método de pago, intente nuevamente");
//       }

//     } else {
//       alert("El pedido fue cancelado, intente nuevamente");
//     }

//   } else {
//     alert(
//       "ERROR. Se permite un máximo de 4 entradas por usuario, intente nuevamente"
//     );
//   }

// } else {
//   alert("No seleccionó ningún sector, intente nuevamente");
// }
