import { cantidad, fechasHarry, sectoresHarry } from "../artistas.js";

// FECHA SELECT OPTION
  const fechasH = document.getElementById("fechaHarry");

  fechasHarry.forEach(fechaHarry => {
    const option = document.createElement("option");
    option.value = fechaHarry.dia;
    option.innerHTML = fechaHarry.dia;

    fechasH.appendChild(option);

  })

// SECTOR SELECT OPTION
  const sectoresH = document.getElementById("sectoresH");

  sectoresHarry.forEach(sectorHarry => {
    let option = document.createElement("option");
    option.value = sectorHarry.precio;
    option.text = sectorHarry.nombre;

    sectoresH.appendChild(option);

  })

  // CANTIDAD SELECT OPTION
  const cant = document.getElementById("cantidad");

  cantidad.forEach(cantidad => {
    let option = document.createElement("option");
    option.value = cantidad.cant;
    option.innerHTML = cantidad.cant;

    cant.appendChild(option);

  })

// COMPRAR

  let totalCompraHarry = [];

  const formharry = document.getElementById('form-harry');

  formharry.addEventListener('submit', (e) => {

     e.preventDefault();

     const dia = document.getElementById('fechaHarry').value;
     const precio = document.getElementById('sectoresH').value;
     const cant = document.getElementById('cantidad').value;
     var sector = $('#sectoresH option:selected').text();

     let stock = 4;
     let costodeservicio = 0.07;
     let total = precio * cant;
     let totalCs = total + total * costodeservicio;
     let stockTotal = stock - cant;

     totalCompraHarry.push({dia, cant, totalCs, sector});

      const t = document.getElementById('total');
     t.innerHTML = `<h2 class="text-center"> TU PEDIDO:</h2>
     <h3 class="text-center">CANTIDAD: ${cant} TOTAL:<strong> $ ${totalCs}</strong> (service charge ya incluído)</h3>
     <h4 class="text-center">UBICACIÓN: Estadio River Plate, DÍA: <strong>${dia}</strong></h4>
     <h3 class="text-center">SECTOR: <strong>${sector}</strong></h3>
     <div class="col-lg-12 text-center">
     <button id="btn_comprar" class="btn">COMPRAR</button>
     <button id="btn_cancelar" class="btn">CANCELAR PEDIDO</button>
     </div>
     `;

     const botonComprar = document.getElementById('btn_comprar');
     const botonCancelar = document.getElementById('btn_cancelar');

     function comprar(){

      Swal.fire({
        html: `<legend>Pago</legend>
        <h5> SECTOR: ${sector}</h5>
        <h5> CANTIDAD DE ENTRADAS: ${cant}</h5>
        <input type="text" id="name" class="form-control" placeholder="Nombre y apellido">
        <br>
        <input type="number" id="number" class="form-control" placeholder="Número de tarjeta">
        <br>
        <input type="password" id="security" class="form-control" placeholder="CVV">
        <br>
        <input type="date" id="date" class="form-control" placeholder="Fecha de expiración">
        <br>
        <input type="email" id="email" class="form-control" placeholder="E-mail">
        <h4> TOTAL A PAGAR: <strong>$${totalCs}</strong></h4>
        `,
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        focusConfirm: true,
        preConfirm: () => {
          let nombre = Swal.getPopup().querySelector('#name').value
          let numero = Swal.getPopup().querySelector('#number').value
          let codigo = Swal.getPopup().querySelector('#security').value
          let fecha = Swal.getPopup().querySelector('#date').value
          let email = Swal.getPopup().querySelector('#email').value
          if (!nombre || !numero || !codigo || !fecha || !email) {
            Swal.showValidationMessage(`Por favor ingrese TODOS los datos pedidos`)
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {

      const enJSON = JSON.stringify(totalCompraHarry);

      localStorage.setItem('totalCompraHarry', enJSON);

      const miPedidoHarry = JSON.parse(localStorage.getItem('totalCompraHarry'));

      Swal.fire(
        'Felicitaciones, ya tenes tus entradas',
        'Vas a recibir los e-tickets por e-mail en un plazo de 24 hs',
        'success'
      )

      fetch("https://formsubmit.co/ajax/camilavaliante_6@hotmail.com",{
        method: "POST",
        body: new FormData(e.target),
      })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(json => {
        window.location.href="../index.html";
      })
      .catch (err => {
        console.log(err);
      })
      ;

    }
    })

    }

    function cancelar(){
      Swal.fire({
        title: '¿Estás seguro que deseas cancelar el pedido?',
        text: 'Si elegís cancelar el pedido vas a tener que seleccionar las entradas nuevamente y perderás las asignadas',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
   }

   document.getElementById('btn_cancelar').onclick = function() {cancelar()};
   document.getElementById('btn_comprar').onclick = function() {comprar()};

})

