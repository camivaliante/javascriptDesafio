import { cantidad, fechasHarry, sectoresHarry } from "./artistas.js";

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

  let totalCompra = [];

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

      const t = document.getElementById('total');
     t.innerHTML = `<h2 class="text-center"> TU PEDIDO:</h2>
     <h3 class="text-center">CANTIDAD: ${cant} TOTAL:<strong> $ ${totalCs}</strong> (service charge ya incluído)</h3>
     <h4 class="text-center">UBICACIÓN: Estadio River Plate, DÍA: <strong>${dia}</strong></h4>
     <h3 class="text-center">SECTOR:<strong>${sector}</strong></h3>
     <div class="col-lg-12 text-center">
     <button id="btn_comprar" class="btn">COMPRAR</button>
     <button id="btn_cancelar" class="btn">CANCELAR PEDIDO</button>
     </div>
     `;

     const botonComprar = document.getElementById('btn_comprar');
     const botonCancelar = document.getElementById('btn_cancelar');

     function comprar(){

      Swal.fire({
        title: 'Inicia sesión',
        html: `<p>Una vez que inicies sesión, se te redirigirá al sector de pago</p>
        <input type="text" id="name" class="form-control" placeholder="Nombre y apellido">
        <br>
        <input type="email" class="form-control" placeholder="E-mail" id="email">
        <br>
        <input type="password" id="password" class="form-control" placeholder="Contraseña">
        <p>Si no estás registrado hace click <a href="../registro.html"> ACÁ </a>`,
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        focusConfirm: true,
        preConfirm: () => {
          let nombre = Swal.getPopup().querySelector('#name').value
          let login = Swal.getPopup().querySelector('#email').value
          let password = Swal.getPopup().querySelector('#password').value
          if (!login || !password || !nombre) {
            Swal.showValidationMessage(`Por favor ingrese TODOS los datos pedidos`)
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
      window.location.href="../sectorpago.html";

      let nombreIngresado = document.getElementById('name').value;

      totalCompra.push({dia, cant, totalCs, sector, nombreIngresado});

      const enJSON = JSON.stringify(totalCompra);

      localStorage.setItem('totalCompra', enJSON);

      const miPedido = JSON.parse(localStorage.getItem('totalCompra'));
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

